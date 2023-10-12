

export class ScheduleConf {
    private 'schedule_start'?: string;
    private 'schedule_end'?: string;
    private 'schedule_type'?: string;
    private 'schedule_date'?: Array<number>;
    private 'schedule_time'?: Array<string>;
    public constructor() { 
    }
    public withScheduleStart(scheduleStart: string): ScheduleConf {
        this['schedule_start'] = scheduleStart;
        return this;
    }
    public set scheduleStart(scheduleStart: string  | undefined) {
        this['schedule_start'] = scheduleStart;
    }
    public get scheduleStart(): string | undefined {
        return this['schedule_start'];
    }
    public withScheduleEnd(scheduleEnd: string): ScheduleConf {
        this['schedule_end'] = scheduleEnd;
        return this;
    }
    public set scheduleEnd(scheduleEnd: string  | undefined) {
        this['schedule_end'] = scheduleEnd;
    }
    public get scheduleEnd(): string | undefined {
        return this['schedule_end'];
    }
    public withScheduleType(scheduleType: string): ScheduleConf {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: string  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): string | undefined {
        return this['schedule_type'];
    }
    public withScheduleDate(scheduleDate: Array<number>): ScheduleConf {
        this['schedule_date'] = scheduleDate;
        return this;
    }
    public set scheduleDate(scheduleDate: Array<number>  | undefined) {
        this['schedule_date'] = scheduleDate;
    }
    public get scheduleDate(): Array<number> | undefined {
        return this['schedule_date'];
    }
    public withScheduleTime(scheduleTime: Array<string>): ScheduleConf {
        this['schedule_time'] = scheduleTime;
        return this;
    }
    public set scheduleTime(scheduleTime: Array<string>  | undefined) {
        this['schedule_time'] = scheduleTime;
    }
    public get scheduleTime(): Array<string> | undefined {
        return this['schedule_time'];
    }
}