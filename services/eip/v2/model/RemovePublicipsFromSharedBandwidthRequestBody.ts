import { RemoveFromSharedBandwidthOption } from './RemoveFromSharedBandwidthOption';


export class RemovePublicipsFromSharedBandwidthRequestBody {
    public bandwidth?: RemoveFromSharedBandwidthOption;
    public constructor(bandwidth?: RemoveFromSharedBandwidthOption) { 
        this['bandwidth'] = bandwidth;
    }
    public withBandwidth(bandwidth: RemoveFromSharedBandwidthOption): RemovePublicipsFromSharedBandwidthRequestBody {
        this['bandwidth'] = bandwidth;
        return this;
    }
}