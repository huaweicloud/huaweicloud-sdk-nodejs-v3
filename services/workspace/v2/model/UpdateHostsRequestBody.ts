import { UpdateHostParam } from './UpdateHostParam';


export class UpdateHostsRequestBody {
    public hosts?: Array<UpdateHostParam>;
    public constructor(hosts?: Array<UpdateHostParam>) { 
        this['hosts'] = hosts;
    }
    public withHosts(hosts: Array<UpdateHostParam>): UpdateHostsRequestBody {
        this['hosts'] = hosts;
        return this;
    }
}