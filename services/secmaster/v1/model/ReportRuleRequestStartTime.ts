

export class ReportRuleRequestStartTime {
    public day?: number;
    public week?: number;
    public month?: number;
    public time?: string;
    public constructor() { 
    }
    public withDay(day: number): ReportRuleRequestStartTime {
        this['day'] = day;
        return this;
    }
    public withWeek(week: number): ReportRuleRequestStartTime {
        this['week'] = week;
        return this;
    }
    public withMonth(month: number): ReportRuleRequestStartTime {
        this['month'] = month;
        return this;
    }
    public withTime(time: string): ReportRuleRequestStartTime {
        this['time'] = time;
        return this;
    }
}