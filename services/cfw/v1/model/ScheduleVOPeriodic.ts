

export class ScheduleVOPeriodic {
    public type?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'week_mask'?: Array<number>;
    private 'start_week'?: number;
    private 'end_week'?: number;
    public constructor() { 
    }
    public withType(type: number): ScheduleVOPeriodic {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): ScheduleVOPeriodic {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ScheduleVOPeriodic {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withWeekMask(weekMask: Array<number>): ScheduleVOPeriodic {
        this['week_mask'] = weekMask;
        return this;
    }
    public set weekMask(weekMask: Array<number>  | undefined) {
        this['week_mask'] = weekMask;
    }
    public get weekMask(): Array<number> | undefined {
        return this['week_mask'];
    }
    public withStartWeek(startWeek: number): ScheduleVOPeriodic {
        this['start_week'] = startWeek;
        return this;
    }
    public set startWeek(startWeek: number  | undefined) {
        this['start_week'] = startWeek;
    }
    public get startWeek(): number | undefined {
        return this['start_week'];
    }
    public withEndWeek(endWeek: number): ScheduleVOPeriodic {
        this['end_week'] = endWeek;
        return this;
    }
    public set endWeek(endWeek: number  | undefined) {
        this['end_week'] = endWeek;
    }
    public get endWeek(): number | undefined {
        return this['end_week'];
    }
}