

export class CreateApplicationEndpointRequestBody {
    public token: string;
    private 'user_data': string | undefined;
    public constructor(token?: any, userData?: any) { 
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
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
}