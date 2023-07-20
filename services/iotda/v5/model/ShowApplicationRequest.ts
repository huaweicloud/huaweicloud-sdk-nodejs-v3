

export class ShowApplicationRequest {
    private 'Instance-Id'?: string;
    private 'app_id'?: string;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withInstanceId(instanceId: string): ShowApplicationRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withAppId(appId: string): ShowApplicationRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}