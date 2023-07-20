import { ScopedTokenAuth } from './ScopedTokenAuth';


export class KeystoneCreateScopedTokenRequestBody {
    public auth?: ScopedTokenAuth;
    public constructor(auth?: ScopedTokenAuth) { 
        this['auth'] = auth;
    }
    public withAuth(auth: ScopedTokenAuth): KeystoneCreateScopedTokenRequestBody {
        this['auth'] = auth;
        return this;
    }
}