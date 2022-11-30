import { AgencyAuth } from './AgencyAuth';


export class CreateTemporaryAccessKeyByAgencyRequestBody {
    public auth: AgencyAuth;
    public constructor(auth?: any) { 
        this['auth'] = auth;
    }
    public withAuth(auth: AgencyAuth): CreateTemporaryAccessKeyByAgencyRequestBody {
        this['auth'] = auth;
        return this;
    }
}