

export class ScheduleObj {
    public type?: ScheduleObjTypeEnum | string;
    public cron?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: ScheduleObjTypeEnum | string): ScheduleObj {
        this['type'] = type;
        return this;
    }
    public withCron(cron: string): ScheduleObj {
        this['cron'] = cron;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScheduleObjTypeEnum {
    NONE = 'None',
    CUSTOM = 'Custom'
}
