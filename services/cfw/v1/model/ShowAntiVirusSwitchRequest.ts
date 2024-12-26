

export class ShowAntiVirusSwitchRequest {
    private 'project_id'?: string;
    private 'object_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(projectId?: string, objectId?: string) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
    }
    public withProjectId(projectId: string): ShowAntiVirusSwitchRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ShowAntiVirusSwitchRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowAntiVirusSwitchRequest {
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