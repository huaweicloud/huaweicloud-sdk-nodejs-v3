

export class ListSlowLogAnalysisRequest {
    private 'instance_id'?: string;
    private 'start_date'?: number;
    private 'end_date'?: number;
    public offset?: number;
    public limit?: number;
    public order?: string;
    public constructor(instanceId?: string, startDate?: number, endDate?: number) { 
        this['instance_id'] = instanceId;
        this['start_date'] = startDate;
        this['end_date'] = endDate;
    }
    public withInstanceId(instanceId: string): ListSlowLogAnalysisRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartDate(startDate: number): ListSlowLogAnalysisRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: number  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): number | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: number): ListSlowLogAnalysisRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: number  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): number | undefined {
        return this['end_date'];
    }
    public withOffset(offset: number): ListSlowLogAnalysisRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSlowLogAnalysisRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrder(order: string): ListSlowLogAnalysisRequest {
        this['order'] = order;
        return this;
    }
}