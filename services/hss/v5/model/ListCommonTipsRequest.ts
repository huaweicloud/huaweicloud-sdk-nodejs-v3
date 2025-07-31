

export class ListCommonTipsRequest {
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public type?: string;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCommonTipsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLimit(limit: number): ListCommonTipsRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListCommonTipsRequest {
        this['type'] = type;
        return this;
    }
}