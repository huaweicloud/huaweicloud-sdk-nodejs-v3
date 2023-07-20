import { AddPublicipsIntoSharedBandwidthOption } from './AddPublicipsIntoSharedBandwidthOption';


export class AddPublicipsIntoSharedBandwidthRequestBody {
    public bandwidth?: AddPublicipsIntoSharedBandwidthOption;
    public constructor(bandwidth?: AddPublicipsIntoSharedBandwidthOption) { 
        this['bandwidth'] = bandwidth;
    }
    public withBandwidth(bandwidth: AddPublicipsIntoSharedBandwidthOption): AddPublicipsIntoSharedBandwidthRequestBody {
        this['bandwidth'] = bandwidth;
        return this;
    }
}