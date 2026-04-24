

export class PeriodObject {
    private 'period_num'?: number;
    private 'period_time'?: string;
    public constructor(periodNum?: number, periodTime?: string) { 
        this['period_num'] = periodNum;
        this['period_time'] = periodTime;
    }
    public withPeriodNum(periodNum: number): PeriodObject {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withPeriodTime(periodTime: string): PeriodObject {
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