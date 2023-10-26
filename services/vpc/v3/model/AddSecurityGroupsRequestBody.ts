import { InsertSecurityGroupOption } from './InsertSecurityGroupOption';


export class AddSecurityGroupsRequestBody {
    public port?: InsertSecurityGroupOption;
    public constructor(port?: InsertSecurityGroupOption) { 
        this['port'] = port;
    }
    public withPort(port: InsertSecurityGroupOption): AddSecurityGroupsRequestBody {
        this['port'] = port;
        return this;
    }
}