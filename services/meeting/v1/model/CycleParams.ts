

export class CycleParams {
    public startDate?: string;
    public endDate?: string;
    public cycle?: string;
    public interval?: number;
    public point?: Array<number>;
    public preRemindDays?: number;
    public constructor(startDate?: string, endDate?: string, cycle?: string, preRemindDays?: number) { 
        this['startDate'] = startDate;
        this['endDate'] = endDate;
        this['cycle'] = cycle;
        this['preRemindDays'] = preRemindDays;
    }
    public withStartDate(startDate: string): CycleParams {
        this['startDate'] = startDate;
        return this;
    }
    public withEndDate(endDate: string): CycleParams {
        this['endDate'] = endDate;
        return this;
    }
    public withCycle(cycle: string): CycleParams {
        this['cycle'] = cycle;
        return this;
    }
    public withInterval(interval: number): CycleParams {
        this['interval'] = interval;
        return this;
    }
    public withPoint(point: Array<number>): CycleParams {
        this['point'] = point;
        return this;
    }
    public withPreRemindDays(preRemindDays: number): CycleParams {
        this['preRemindDays'] = preRemindDays;
        return this;
    }
}