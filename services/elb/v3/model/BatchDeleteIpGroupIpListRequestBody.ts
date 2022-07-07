import { BatchDeleteIpListOption } from './BatchDeleteIpListOption';


export class BatchDeleteIpGroupIpListRequestBody {
    public ipgroup?: BatchDeleteIpListOption;
    public constructor() { 
    }
    public withIpgroup(ipgroup: BatchDeleteIpListOption): BatchDeleteIpGroupIpListRequestBody {
        this['ipgroup'] = ipgroup;
        return this;
    }
}