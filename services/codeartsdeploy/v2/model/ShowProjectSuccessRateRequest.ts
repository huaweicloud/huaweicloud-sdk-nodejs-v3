

export class ShowProjectSuccessRateRequest {
    private 'project_id': string | undefined;
    private 'start_date': string | undefined;
    private 'end_date': string | undefined;
    public constructor(projectId?: any, startDate?: any, endDate?: any) { 
        this['project_id'] = projectId;
        this['start_date'] = startDate;
        this['end_date'] = endDate;
    }
    public withProjectId(projectId: string): ShowProjectSuccessRateRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withStartDate(startDate: string): ShowProjectSuccessRateRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate() {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ShowProjectSuccessRateRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate() {
        return this['end_date'];
    }
}