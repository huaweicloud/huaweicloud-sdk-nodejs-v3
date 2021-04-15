import { CreateSharedBandwidthOption } from './CreateSharedBandwidthOption';


export class CreateSharedBandwidhRequestBody {
    public bandwidth: CreateSharedBandwidthOption;
    public constructor(bandwidth?: any) { 
        this['bandwidth'] = bandwidth;
    }
    public withBandwidth(bandwidth: CreateSharedBandwidthOption): CreateSharedBandwidhRequestBody {
        this['bandwidth'] = bandwidth;
        return this;
    }
}