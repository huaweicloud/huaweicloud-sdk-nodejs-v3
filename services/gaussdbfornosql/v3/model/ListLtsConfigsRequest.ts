

export class ListLtsConfigsRequest {
    private 'X-Language'?: string;
    public offset?: number;
    public limit?: number;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListLtsConfigsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListLtsConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLtsConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withInstanceId(instanceId: string): ListLtsConfigsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ListLtsConfigsRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListLtsConfigsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}