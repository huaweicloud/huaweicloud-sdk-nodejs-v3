

export class ShowDeviceAuthorizerRequest {
    private 'Instance-Id'?: string;
    private 'authorizer_id'?: string;
    public constructor(authorizerId?: string) { 
        this['authorizer_id'] = authorizerId;
    }
    public withInstanceId(instanceId: string): ShowDeviceAuthorizerRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withAuthorizerId(authorizerId: string): ShowDeviceAuthorizerRequest {
        this['authorizer_id'] = authorizerId;
        return this;
    }
    public set authorizerId(authorizerId: string  | undefined) {
        this['authorizer_id'] = authorizerId;
    }
    public get authorizerId(): string | undefined {
        return this['authorizer_id'];
    }
}