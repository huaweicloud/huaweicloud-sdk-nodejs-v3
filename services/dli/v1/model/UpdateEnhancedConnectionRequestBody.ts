import { EnhancedConnectionHost } from './EnhancedConnectionHost';


export class UpdateEnhancedConnectionRequestBody {
    public hosts?: Array<EnhancedConnectionHost>;
    public constructor(hosts?: Array<EnhancedConnectionHost>) { 
        this['hosts'] = hosts;
    }
    public withHosts(hosts: Array<EnhancedConnectionHost>): UpdateEnhancedConnectionRequestBody {
        this['hosts'] = hosts;
        return this;
    }
}