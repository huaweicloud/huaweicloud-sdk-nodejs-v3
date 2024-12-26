

export class ListIpsRulesRequest {
    private 'object_id'?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(objectId?: string, projectId?: string) { 
        this['object_id'] = objectId;
        this['project_id'] = projectId;
    }
    public withObjectId(objectId: string): ListIpsRulesRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withProjectId(projectId: string): ListIpsRulesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListIpsRulesRequest {
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