import { TokenAuth } from './TokenAuth';


export class CreateTemporaryAccessKeyByTokenRequestBody {
    public auth: TokenAuth;
    public constructor(auth: any) { 
        this['auth'] = auth;
    }
    public withAuth(auth: TokenAuth): CreateTemporaryAccessKeyByTokenRequestBody {
        this['auth'] = auth;
        return this;
    }
}