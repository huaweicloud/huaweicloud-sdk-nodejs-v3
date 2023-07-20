

export class CreateApplicationEndpointRequestBody {
    public token?: string;
    private 'user_data'?: string;
    public constructor(token?: string, userData?: string) { 
        this['token'] = token;
        this['user_data'] = userData;
    }
    public withToken(token: string): CreateApplicationEndpointRequestBody {
        this['token'] = token;
        return this;
    }
    public withUserData(userData: string): CreateApplicationEndpointRequestBody {
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