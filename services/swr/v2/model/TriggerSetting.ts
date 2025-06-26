

export class TriggerSetting {
    public cron?: string;
    public constructor() { 
    }
    public withCron(cron: string): TriggerSetting {
        this['cron'] = cron;
        return this;
    }
}