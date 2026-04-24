

export class PeriodSlaTimeV2 {
    private 'period_num'?: number;
    private 'period_time'?: string;
    public constructor() { 
    }
    public withPeriodNum(periodNum: number): PeriodSlaTimeV2 {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withPeriodTime(periodTime: string): PeriodSlaTimeV2 {
        this['period_time'] = periodTime;
        return this;
    }
    public set periodTime(periodTime: string  | undefined) {
        this['period_time'] = periodTime;
    }
    public get periodTime(): string | undefined {
        return this['period_time'];
    }
}