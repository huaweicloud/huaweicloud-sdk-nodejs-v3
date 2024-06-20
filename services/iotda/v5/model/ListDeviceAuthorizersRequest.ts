

export class ListDeviceAuthorizersRequest {
    private 'Instance-Id'?: string;
    private 'authorizer_name'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListDeviceAuthorizersRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withAuthorizerName(authorizerName: string): ListDeviceAuthorizersRequest {
        this['authorizer_name'] = authorizerName;
        return this;
    }
    public set authorizerName(authorizerName: string  | undefined) {
        this['authorizer_name'] = authorizerName;
    }
    public get authorizerName(): string | undefined {
        return this['authorizer_name'];
    }
    public withLimit(limit: number): ListDeviceAuthorizersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDeviceAuthorizersRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListDeviceAuthorizersRequest {
        this['offset'] = offset;
        return this;
    }
}