import { UpdateBandwidthOption } from './UpdateBandwidthOption';


export class UpdateBandwidthRequestBody {
    public bandwidth?: UpdateBandwidthOption;
    public constructor(bandwidth?: UpdateBandwidthOption) { 
        this['bandwidth'] = bandwidth;
    }
    public withBandwidth(bandwidth: UpdateBandwidthOption): UpdateBandwidthRequestBody {
        this['bandwidth'] = bandwidth;
        return this;
    }
}