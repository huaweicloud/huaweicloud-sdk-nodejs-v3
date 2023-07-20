

export class CloudBaseInfo {
    public region?: string;
    private 'project_id'?: string;
    private 'az_code'?: string;
    public constructor(region?: string, projectId?: string) { 
        this['region'] = region;
        this['project_id'] = projectId;
    }
    public withRegion(region: string): CloudBaseInfo {
        this['region'] = region;
        return this;
    }
    public withProjectId(projectId: string): CloudBaseInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAzCode(azCode: string): CloudBaseInfo {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
}