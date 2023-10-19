

export class CreateConnectivityTestRequestBody {
    public password?: string;
    public constructor() { 
    }
    public withPassword(password: string): CreateConnectivityTestRequestBody {
        this['password'] = password;
        return this;
    }
}