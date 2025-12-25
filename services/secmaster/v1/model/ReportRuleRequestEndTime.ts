

export class ReportRuleRequestEndTime {
    public day?: number;
    public week?: number;
    public month?: number;
    public time?: string;
    public constructor() { 
    }
    public withDay(day: number): ReportRuleRequestEndTime {
        this['day'] = day;
        return this;
    }
    public withWeek(week: number): ReportRuleRequestEndTime {
        this['week'] = week;
        return this;
    }
    public withMonth(month: number): ReportRuleRequestEndTime {
        this['month'] = month;
        return this;
    }
    public withTime(time: string): ReportRuleRequestEndTime {
        this['time'] = time;
        return this;
    }
}