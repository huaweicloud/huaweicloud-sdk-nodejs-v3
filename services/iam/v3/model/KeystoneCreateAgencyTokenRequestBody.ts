import { AgencyTokenAuth } from './AgencyTokenAuth';


export class KeystoneCreateAgencyTokenRequestBody {
    public auth?: AgencyTokenAuth;
    public constructor(auth?: AgencyTokenAuth) { 
        this['auth'] = auth;
    }
    public withAuth(auth: AgencyTokenAuth): KeystoneCreateAgencyTokenRequestBody {
        this['auth'] = auth;
        return this;
    }
}