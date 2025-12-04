import { BareMetalModifyPortRequest } from './BareMetalModifyPortRequest';


export class BareMetalModifyPortRequestBody {
    public nic?: BareMetalModifyPortRequest;
    public constructor() { 
    }
    public withNic(nic: BareMetalModifyPortRequest): BareMetalModifyPortRequestBody {
        this['nic'] = nic;
        return this;
    }
}