

export class CancelingAuthorizationV2Request {
    private 'instance_id'?: string;
    private 'app_auth_id'?: string;
    public constructor(instanceId?: string, appAuthId?: string) { 
        this['instance_id'] = instanceId;
        this['app_auth_id'] = appAuthId;
    }
    public withInstanceId(instanceId: string): CancelingAuthorizationV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAppAuthId(appAuthId: string): CancelingAuthorizationV2Request {
        this['app_auth_id'] = appAuthId;
        return this;
    }
    public set appAuthId(appAuthId: string  | undefined) {
        this['app_auth_id'] = appAuthId;
    }
    public get appAuthId(): string | undefined {
        return this['app_auth_id'];
    }
}