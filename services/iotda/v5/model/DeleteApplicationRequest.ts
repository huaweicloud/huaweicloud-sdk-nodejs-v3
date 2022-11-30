

export class DeleteApplicationRequest {
    private 'Instance-Id'?: string | undefined;
    private 'app_id': string | undefined;
    public constructor(appId?: any) { 
        this['app_id'] = appId;
    }
    public withInstanceId(instanceId: string): DeleteApplicationRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withAppId(appId: string): DeleteApplicationRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
}