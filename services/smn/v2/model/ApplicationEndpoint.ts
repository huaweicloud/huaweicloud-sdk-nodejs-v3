

export class ApplicationEndpoint {
    private 'create_time'?: string;
    private 'endpoint_urn'?: string;
    private 'user_data'?: string;
    public enabled?: string;
    public token?: string;
    public constructor(createTime?: string, endpointUrn?: string, userData?: string, enabled?: string, token?: string) { 
        this['create_time'] = createTime;
        this['endpoint_urn'] = endpointUrn;
        this['user_data'] = userData;
        this['enabled'] = enabled;
        this['token'] = token;
    }
    public withCreateTime(createTime: string): ApplicationEndpoint {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndpointUrn(endpointUrn: string): ApplicationEndpoint {
        this['endpoint_urn'] = endpointUrn;
        return this;
    }
    public set endpointUrn(endpointUrn: string  | undefined) {
        this['endpoint_urn'] = endpointUrn;
    }
    public get endpointUrn(): string | undefined {
        return this['endpoint_urn'];
    }
    public withUserData(userData: string): ApplicationEndpoint {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withEnabled(enabled: string): ApplicationEndpoint {
        this['enabled'] = enabled;
        return this;
    }
    public withToken(token: string): ApplicationEndpoint {
        this['token'] = token;
        return this;
    }
}