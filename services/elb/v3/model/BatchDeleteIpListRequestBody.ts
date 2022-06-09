import { BatchDeleteIpListOption } from './BatchDeleteIpListOption';


export class BatchDeleteIpListRequestBody {
    public ipgroup?: BatchDeleteIpListOption;
    public constructor() { 
    }
    public withIpgroup(ipgroup: BatchDeleteIpListOption): BatchDeleteIpListRequestBody {
        this['ipgroup'] = ipgroup;
        return this;
    }
}