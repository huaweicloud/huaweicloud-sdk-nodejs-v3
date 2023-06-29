

export class OpenNotifySetting {
    public enableCalendar: string;
    public enableSms: string;
    public enableEmail: string;
    public constructor(enableCalendar?: any, enableSms?: any, enableEmail?: any) { 
        this['enableCalendar'] = enableCalendar;
        this['enableSms'] = enableSms;
        this['enableEmail'] = enableEmail;
    }
    public withEnableCalendar(enableCalendar: string): OpenNotifySetting {
        this['enableCalendar'] = enableCalendar;
        return this;
    }
    public withEnableSms(enableSms: string): OpenNotifySetting {
        this['enableSms'] = enableSms;
        return this;
    }
    public withEnableEmail(enableEmail: string): OpenNotifySetting {
        this['enableEmail'] = enableEmail;
        return this;
    }
}