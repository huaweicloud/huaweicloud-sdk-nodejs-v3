import { CreateSharedBandwidthOption } from './CreateSharedBandwidthOption';


export class CreateSharedBandwidhRequestBody {
    public bandwidth?: CreateSharedBandwidthOption;
    public constructor(bandwidth?: CreateSharedBandwidthOption) { 
        this['bandwidth'] = bandwidth;
    }
    public withBandwidth(bandwidth: CreateSharedBandwidthOption): CreateSharedBandwidhRequestBody {
        this['bandwidth'] = bandwidth;
        return this;
    }
}