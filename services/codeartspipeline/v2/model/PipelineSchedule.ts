

export class PipelineSchedule {
    public uuid?: string;
    public type?: string;
    public name?: string;
    public enable?: string;
    private 'days_of_week'?: string;
    private 'time_zone'?: string;
    public constructor() { 
    }
    public withUuid(uuid: string): PipelineSchedule {
        this['uuid'] = uuid;
        return this;
    }
    public withType(type: string): PipelineSchedule {
        this['type'] = type;
        return this;
    }
    public withName(name: string): PipelineSchedule {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: string): PipelineSchedule {
        this['enable'] = enable;
        return this;
    }
    public withDaysOfWeek(daysOfWeek: string): PipelineSchedule {
        this['days_of_week'] = daysOfWeek;
        return this;
    }
    public set daysOfWeek(daysOfWeek: string  | undefined) {
        this['days_of_week'] = daysOfWeek;
    }
    public get daysOfWeek(): string | undefined {
        return this['days_of_week'];
    }
    public withTimeZone(timeZone: string): PipelineSchedule {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}