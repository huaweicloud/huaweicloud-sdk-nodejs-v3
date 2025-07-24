import { ShareTypesAttributionBandwidth } from './ShareTypesAttributionBandwidth';
import { ShareTypesAttributionCapacity } from './ShareTypesAttributionCapacity';
import { ShareTypesAttributionIops } from './ShareTypesAttributionIops';
import { ShareTypesAttributionSingleChannel4KLatency } from './ShareTypesAttributionSingleChannel4KLatency';


export class ShareTypesAttribution {
    public capacity?: ShareTypesAttributionCapacity;
    public bandwidth?: ShareTypesAttributionBandwidth;
    public iops?: ShareTypesAttributionIops;
    private 'single_channel_4k_latency'?: ShareTypesAttributionSingleChannel4KLatency;
    public constructor() { 
    }
    public withCapacity(capacity: ShareTypesAttributionCapacity): ShareTypesAttribution {
        this['capacity'] = capacity;
        return this;
    }
    public withBandwidth(bandwidth: ShareTypesAttributionBandwidth): ShareTypesAttribution {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withIops(iops: ShareTypesAttributionIops): ShareTypesAttribution {
        this['iops'] = iops;
        return this;
    }
    public withSingleChannel4kLatency(singleChannel4kLatency: ShareTypesAttributionSingleChannel4KLatency): ShareTypesAttribution {
        this['single_channel_4k_latency'] = singleChannel4kLatency;
        return this;
    }
    public set singleChannel4kLatency(singleChannel4kLatency: ShareTypesAttributionSingleChannel4KLatency  | undefined) {
        this['single_channel_4k_latency'] = singleChannel4kLatency;
    }
    public get singleChannel4kLatency(): ShareTypesAttributionSingleChannel4KLatency | undefined {
        return this['single_channel_4k_latency'];
    }
}