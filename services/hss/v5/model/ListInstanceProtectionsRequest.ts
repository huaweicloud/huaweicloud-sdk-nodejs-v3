

export class ListInstanceProtectionsRequest {
    private 'enterprise_project_id'?: string;
    public type?: string;
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInstanceProtectionsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: string): ListInstanceProtectionsRequest {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): ListInstanceProtectionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListInstanceProtectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInstanceProtectionsRequest {
        this['offset'] = offset;
        return this;
    }
}