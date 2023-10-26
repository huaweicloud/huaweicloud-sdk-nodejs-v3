

export class ListWeeklyReportsRequest {
    private 'period_start_date'?: string;
    public constructor() { 
    }
    public withPeriodStartDate(periodStartDate: string): ListWeeklyReportsRequest {
        this['period_start_date'] = periodStartDate;
        return this;
    }
    public set periodStartDate(periodStartDate: string  | undefined) {
        this['period_start_date'] = periodStartDate;
    }
    public get periodStartDate(): string | undefined {
        return this['period_start_date'];
    }
}