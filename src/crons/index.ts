import { ReminderCron } from "./reminder.cron";

export const runCrons = () => {
  ReminderCron.start();
};
