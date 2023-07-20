import { UpdateIpGroupOption } from './UpdateIpGroupOption';


export class UpdateIpGroupRequestBody {
    public ipgroup?: UpdateIpGroupOption;
    public constructor(ipgroup?: UpdateIpGroupOption) { 
        this['ipgroup'] = ipgroup;
    }
    public withIpgroup(ipgroup: UpdateIpGroupOption): UpdateIpGroupRequestBody {
        this['ipgroup'] = ipgroup;
        return this;
    }
}