

export class ListApplicationEndpointsRequest {
    private 'application_urn'?: string;
    public offset?: number;
    public limit?: number;
    public enabled?: string;
    public token?: string;
    private 'user_data'?: string;
    public constructor(applicationUrn?: string) { 
        this['application_urn'] = applicationUrn;
    }
    public withApplicationUrn(applicationUrn: string): ListApplicationEndpointsRequest {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string  | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn(): string | undefined {
        return this['application_urn'];
    }
    public withOffset(offset: number): ListApplicationEndpointsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListApplicationEndpointsRequest {
        this['limit'] = limit;
        return this;
    }
    public withEnabled(enabled: string): ListApplicationEndpointsRequest {
        this['enabled'] = enabled;
        return this;
    }
    public withToken(token: string): ListApplicationEndpointsRequest {
        this['token'] = token;
        return this;
    }
    public withUserData(userData: string): ListApplicationEndpointsRequest {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
}