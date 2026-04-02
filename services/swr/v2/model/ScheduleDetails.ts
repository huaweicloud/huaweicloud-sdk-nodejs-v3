import { ScheduleObj } from './ScheduleObj';


export class ScheduleDetails {
    public type?: ScheduleDetailsTypeEnum | string;
    public cron?: string;
    private 'next_scheduled_time'?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: ScheduleDetailsTypeEnum | string): ScheduleDetails {
        this['type'] = type;
        return this;
    }
    public withCron(cron: string): ScheduleDetails {
        this['cron'] = cron;
        return this;
    }
    public withNextScheduledTime(nextScheduledTime: string): ScheduleDetails {
        this['next_scheduled_time'] = nextScheduledTime;
        return this;
    }
    public set nextScheduledTime(nextScheduledTime: string  | undefined) {
        this['next_scheduled_time'] = nextScheduledTime;
    }
    public get nextScheduledTime(): string | undefined {
        return this['next_scheduled_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScheduleDetailsTypeEnum {
    NONE = 'None',
    CUSTOM = 'Custom'
}
