import { BatchCreateBandwidthOption } from './BatchCreateBandwidthOption';


export class BatchCreateBandwidthRequestBody {
    public bandwidth: BatchCreateBandwidthOption;
    public constructor(bandwidth?: any) { 
        this['bandwidth'] = bandwidth;
    }
    public withBandwidth(bandwidth: BatchCreateBandwidthOption): BatchCreateBandwidthRequestBody {
        this['bandwidth'] = bandwidth;
        return this;
    }
}