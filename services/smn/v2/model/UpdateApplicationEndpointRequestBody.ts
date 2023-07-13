

export class UpdateApplicationEndpointRequestBody {
    public enabled?: string;
    private 'user_data'?: string | undefined;
    public constructor() { 
    }
    public withEnabled(enabled: string): UpdateApplicationEndpointRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withUserData(userData: string): UpdateApplicationEndpointRequestBody {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
}