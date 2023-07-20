import { MfaAuth } from './MfaAuth';


export class KeystoneCreateUserTokenByPasswordAndMfaRequestBody {
    public auth?: MfaAuth;
    public constructor(auth?: MfaAuth) { 
        this['auth'] = auth;
    }
    public withAuth(auth: MfaAuth): KeystoneCreateUserTokenByPasswordAndMfaRequestBody {
        this['auth'] = auth;
        return this;
    }
}