

export class AuthorizeCsmsAndKmsRequestBody {
    public authorization?: object;
    public constructor(authorization?: object) { 
        this['authorization'] = authorization;
    }
    public withAuthorization(authorization: object): AuthorizeCsmsAndKmsRequestBody {
        this['authorization'] = authorization;
        return this;
    }
}