

export class SetRemindersConfigRequestInfo {
    public reminders?: boolean;
    public constructor(reminders?: boolean) { 
        this['reminders'] = reminders;
    }
    public withReminders(reminders: boolean): SetRemindersConfigRequestInfo {
        this['reminders'] = reminders;
        return this;
    }
}