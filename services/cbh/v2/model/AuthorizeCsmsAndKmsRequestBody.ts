import { AgencyAuthorizeInfo } from './AgencyAuthorizeInfo';


export class AuthorizeCsmsAndKmsRequestBody {
    public authorization?: AgencyAuthorizeInfo;
    public constructor(authorization?: AgencyAuthorizeInfo) { 
        this['authorization'] = authorization;
    }
    public withAuthorization(authorization: AgencyAuthorizeInfo): AuthorizeCsmsAndKmsRequestBody {
        this['authorization'] = authorization;
        return this;
    }
}