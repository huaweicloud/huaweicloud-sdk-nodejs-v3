import { RemoveSecurityGroupOption } from './RemoveSecurityGroupOption';


export class RemoveSecurityGroupsRequestBody {
    public port?: RemoveSecurityGroupOption;
    public constructor(port?: RemoveSecurityGroupOption) { 
        this['port'] = port;
    }
    public withPort(port: RemoveSecurityGroupOption): RemoveSecurityGroupsRequestBody {
        this['port'] = port;
        return this;
    }
}