

export class ListApplicationPermissionsRequest {
    private 'app_id'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withAppId(appId: string): ListApplicationPermissionsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withProjectId(projectId: string): ListApplicationPermissionsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}