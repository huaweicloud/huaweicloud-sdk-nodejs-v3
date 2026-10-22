

export class ListAiGuardOverviewSummaryRequest {
    public from?: number;
    public to?: number;
    public constructor(from?: number, to?: number) { 
        this['from'] = from;
        this['to'] = to;
    }
    public withFrom(from: number): ListAiGuardOverviewSummaryRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListAiGuardOverviewSummaryRequest {
        this['to'] = to;
        return this;
    }
}