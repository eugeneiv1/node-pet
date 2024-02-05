import { CronJob } from "cron";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { EEmailAction } from "../enums/email-action.enum";
import { tokenRepository } from "../repositories/token.repository";
import { emailService } from "../services/mail.service";
import { userService } from "../services/user.service";

dayjs.extend(utc);

const remindUsers = async function () {
  const prevTime = dayjs().utc().subtract(30, "s");
  const loggedUsers = await tokenRepository.findManyByParams({
    createdAt: { $lte: prevTime },
  });
  loggedUsers.map(async (loggedUser) => {
    const user = await userService.findById(loggedUser.userId);
    await emailService.sendMail(user.email, EEmailAction.REMIND, user.name);
  });
};
export const ReminderCron = new CronJob("*/30 * * * * *", remindUsers);
