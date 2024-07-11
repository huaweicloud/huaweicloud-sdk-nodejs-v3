

export class EnvironmentInfo {
    public id?: string;
    public name?: string;
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): EnvironmentInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EnvironmentInfo {
        this['name'] = name;
        return this;
    }
    public withAppId(appId: string): EnvironmentInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): EnvironmentInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withProjectId(projectId: string): EnvironmentInfo {
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