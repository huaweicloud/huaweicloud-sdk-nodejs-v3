

export class ListVulHandleTaskRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'handle_type'?: string;
    private 'min_start_time'?: number;
    private 'max_start_time'?: number;
    public status?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVulHandleTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListVulHandleTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListVulHandleTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withHandleType(handleType: string): ListVulHandleTaskRequest {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): string | undefined {
        return this['handle_type'];
    }
    public withMinStartTime(minStartTime: number): ListVulHandleTaskRequest {
        this['min_start_time'] = minStartTime;
        return this;
    }
    public set minStartTime(minStartTime: number  | undefined) {
        this['min_start_time'] = minStartTime;
    }
    public get minStartTime(): number | undefined {
        return this['min_start_time'];
    }
    public withMaxStartTime(maxStartTime: number): ListVulHandleTaskRequest {
        this['max_start_time'] = maxStartTime;
        return this;
    }
    public set maxStartTime(maxStartTime: number  | undefined) {
        this['max_start_time'] = maxStartTime;
    }
    public get maxStartTime(): number | undefined {
        return this['max_start_time'];
    }
    public withStatus(status: string): ListVulHandleTaskRequest {
        this['status'] = status;
        return this;
    }
}