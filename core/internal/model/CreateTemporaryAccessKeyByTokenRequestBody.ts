import { TokenAuth } from './TokenAuth';


export class CreateTemporaryAccessKeyByTokenRequestBody {
    public auth?: TokenAuth;
    public constructor(auth?: TokenAuth) { 
        this.auth = auth;
    }
    public withAuth(auth: TokenAuth): this {
        this.auth = auth;
        return this;
    }
}