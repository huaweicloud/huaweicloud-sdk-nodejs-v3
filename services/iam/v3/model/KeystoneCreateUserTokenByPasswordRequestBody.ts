import { PwdAuth } from './PwdAuth';


export class KeystoneCreateUserTokenByPasswordRequestBody {
    public auth: PwdAuth;
    public constructor(auth?: any) { 
        this['auth'] = auth;
    }
    public withAuth(auth: PwdAuth): KeystoneCreateUserTokenByPasswordRequestBody {
        this['auth'] = auth;
        return this;
    }
}