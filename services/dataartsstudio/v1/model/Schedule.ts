import { Cron } from './Cron';
import { Event } from './Event';


export class Schedule {
    public type?: ScheduleTypeEnum | string;
    public cron?: Cron;
    public event?: Event;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: ScheduleTypeEnum | string): Schedule {
        this['type'] = type;
        return this;
    }
    public withCron(cron: Cron): Schedule {
        this['cron'] = cron;
        return this;
    }
    public withEvent(event: Event): Schedule {
        this['event'] = event;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScheduleTypeEnum {
    EXECUTE_ONCE = 'EXECUTE_ONCE',
    CRON = 'CRON',
    EVENT = 'EVENT'
}
