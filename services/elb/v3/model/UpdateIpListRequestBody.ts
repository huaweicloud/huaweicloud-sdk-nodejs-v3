import { UpdateIpListOption } from './UpdateIpListOption';


export class UpdateIpListRequestBody {
    public ipgroup?: UpdateIpListOption;
    public constructor() { 
    }
    public withIpgroup(ipgroup: UpdateIpListOption): UpdateIpListRequestBody {
        this['ipgroup'] = ipgroup;
        return this;
    }
}