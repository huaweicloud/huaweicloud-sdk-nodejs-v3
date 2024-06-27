

export class ShowClickHouseLtsConfigRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'instance_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ShowClickHouseLtsConfigRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowClickHouseLtsConfigRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowClickHouseLtsConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withInstanceName(instanceName: string): ShowClickHouseLtsConfigRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withLimit(limit: number): ShowClickHouseLtsConfigRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowClickHouseLtsConfigRequest {
        this['offset'] = offset;
        return this;
    }
}