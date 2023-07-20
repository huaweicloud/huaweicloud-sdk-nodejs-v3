

export class ShowProjectSuccessRateRequest {
    private 'project_id'?: string;
    private 'start_date'?: string;
    private 'end_date'?: string;
    public constructor(projectId?: string, startDate?: string, endDate?: string) { 
        this['project_id'] = projectId;
        this['start_date'] = startDate;
        this['end_date'] = endDate;
    }
    public withProjectId(projectId: string): ShowProjectSuccessRateRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStartDate(startDate: string): ShowProjectSuccessRateRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ShowProjectSuccessRateRequest {
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