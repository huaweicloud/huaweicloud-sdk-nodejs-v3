import { CreateIpGroupOption } from './CreateIpGroupOption';


export class CreateIpGroupRequestBody {
    public ipgroup: CreateIpGroupOption;
    public constructor(ipgroup?: any) { 
        this['ipgroup'] = ipgroup;
    }
    public withIpgroup(ipgroup: CreateIpGroupOption): CreateIpGroupRequestBody {
        this['ipgroup'] = ipgroup;
        return this;
    }
}