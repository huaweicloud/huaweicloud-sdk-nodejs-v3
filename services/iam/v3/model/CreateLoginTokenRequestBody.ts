import { LoginTokenAuth } from './LoginTokenAuth';


export class CreateLoginTokenRequestBody {
    public auth?: LoginTokenAuth;
    public constructor(auth?: LoginTokenAuth) { 
        this['auth'] = auth;
    }
    public withAuth(auth: LoginTokenAuth): CreateLoginTokenRequestBody {
        this['auth'] = auth;
        return this;
    }
}