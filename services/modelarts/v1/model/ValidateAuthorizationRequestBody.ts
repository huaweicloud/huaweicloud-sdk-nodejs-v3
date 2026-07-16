import { AuthRequests } from './AuthRequests';


export class ValidateAuthorizationRequestBody {
    public requests?: Array<AuthRequests>;
    public constructor(requests?: Array<AuthRequests>) { 
        this['requests'] = requests;
    }
    public withRequests(requests: Array<AuthRequests>): ValidateAuthorizationRequestBody {
        this['requests'] = requests;
        return this;
    }
}