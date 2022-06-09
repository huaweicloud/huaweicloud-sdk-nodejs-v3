import { UpdateIpGroupIpListOption } from './UpdateIpGroupIpListOption';


export class UpdateIpListRequestBody {
    public ipgroup?: UpdateIpGroupIpListOption;
    public constructor() { 
    }
    public withIpgroup(ipgroup: UpdateIpGroupIpListOption): UpdateIpListRequestBody {
        this['ipgroup'] = ipgroup;
        return this;
    }
}