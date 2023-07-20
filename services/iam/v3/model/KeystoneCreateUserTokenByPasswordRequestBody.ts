import { PwdAuth } from './PwdAuth';


export class KeystoneCreateUserTokenByPasswordRequestBody {
    public auth?: PwdAuth;
    public constructor(auth?: PwdAuth) { 
        this['auth'] = auth;
    }
    public withAuth(auth: PwdAuth): KeystoneCreateUserTokenByPasswordRequestBody {
        this['auth'] = auth;
        return this;
    }
}