import { UpdateIpGroupOption } from './UpdateIpGroupOption';


export class UpdateIpGroupRequestBody {
    public ipgroup: UpdateIpGroupOption;
    public constructor(ipgroup?: any) { 
        this['ipgroup'] = ipgroup;
    }
    public withIpgroup(ipgroup: UpdateIpGroupOption): UpdateIpGroupRequestBody {
        this['ipgroup'] = ipgroup;
        return this;
    }
}