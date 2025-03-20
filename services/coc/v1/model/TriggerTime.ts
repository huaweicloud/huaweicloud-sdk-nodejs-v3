

export class TriggerTime {
    private 'time_zone'?: string;
    public policy?: TriggerTimePolicyEnum | string;
    private 'single_scheduled_time'?: number;
    private 'periodic_scheduled_time'?: string;
    public period?: string;
    public cron?: string;
    private 'scheduled_close_time'?: number;
    public constructor(timeZone?: string, policy?: string) { 
        this['time_zone'] = timeZone;
        this['policy'] = policy;
    }
    public withTimeZone(timeZone: string): TriggerTime {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withPolicy(policy: TriggerTimePolicyEnum | string): TriggerTime {
        this['policy'] = policy;
        return this;
    }
    public withSingleScheduledTime(singleScheduledTime: number): TriggerTime {
        this['single_scheduled_time'] = singleScheduledTime;
        return this;
    }
    public set singleScheduledTime(singleScheduledTime: number  | undefined) {
        this['single_scheduled_time'] = singleScheduledTime;
    }
    public get singleScheduledTime(): number | undefined {
        return this['single_scheduled_time'];
    }
    public withPeriodicScheduledTime(periodicScheduledTime: string): TriggerTime {
        this['periodic_scheduled_time'] = periodicScheduledTime;
        return this;
    }
    public set periodicScheduledTime(periodicScheduledTime: string  | undefined) {
        this['periodic_scheduled_time'] = periodicScheduledTime;
    }
    public get periodicScheduledTime(): string | undefined {
        return this['periodic_scheduled_time'];
    }
    public withPeriod(period: string): TriggerTime {
        this['period'] = period;
        return this;
    }
    public withCron(cron: string): TriggerTime {
        this['cron'] = cron;
        return this;
    }
    public withScheduledCloseTime(scheduledCloseTime: number): TriggerTime {
        this['scheduled_close_time'] = scheduledCloseTime;
        return this;
    }
    public set scheduledCloseTime(scheduledCloseTime: number  | undefined) {
        this['scheduled_close_time'] = scheduledCloseTime;
    }
    public get scheduledCloseTime(): number | undefined {
        return this['scheduled_close_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TriggerTimePolicyEnum {
    PERIODIC = 'PERIODIC',
    ONCE = 'ONCE',
    CRON = 'CRON'
}
