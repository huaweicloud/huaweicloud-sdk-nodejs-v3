

export class ListSlowLogsRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'start_date'?: string;
    private 'end_date'?: string;
    public constructor(instanceId?: string, startDate?: string, endDate?: string) { 
        this['instance_id'] = instanceId;
        this['start_date'] = startDate;
        this['end_date'] = endDate;
    }
    public withInstanceId(instanceId: string): ListSlowLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListSlowLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSlowLogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartDate(startDate: string): ListSlowLogsRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ListSlowLogsRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
}