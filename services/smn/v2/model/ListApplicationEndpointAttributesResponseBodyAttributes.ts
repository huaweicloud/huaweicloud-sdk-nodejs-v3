

export class ListApplicationEndpointAttributesResponseBodyAttributes {
    public enabled?: string;
    public token?: string;
    private 'user_data'?: string;
    public constructor(enabled?: string, token?: string, userData?: string) { 
        this['enabled'] = enabled;
        this['token'] = token;
        this['user_data'] = userData;
    }
    public withEnabled(enabled: string): ListApplicationEndpointAttributesResponseBodyAttributes {
        this['enabled'] = enabled;
        return this;
    }
    public withToken(token: string): ListApplicationEndpointAttributesResponseBodyAttributes {
        this['token'] = token;
        return this;
    }
    public withUserData(userData: string): ListApplicationEndpointAttributesResponseBodyAttributes {
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