

export class ListAssessTaskRequest {
    public offset?: number;
    public limit?: number;
    private 'application_id'?: string;
    private 'assess_status_list'?: Array<string>;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withOffset(offset: number): ListAssessTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAssessTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withApplicationId(applicationId: string): ListAssessTaskRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withAssessStatusList(assessStatusList: Array<string>): ListAssessTaskRequest {
        this['assess_status_list'] = assessStatusList;
        return this;
    }
    public set assessStatusList(assessStatusList: Array<string>  | undefined) {
        this['assess_status_list'] = assessStatusList;
    }
    public get assessStatusList(): Array<string> | undefined {
        return this['assess_status_list'];
    }
}