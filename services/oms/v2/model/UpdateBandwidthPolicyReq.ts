import { BandwidthPolicyDto } from './BandwidthPolicyDto';


export class UpdateBandwidthPolicyReq {
    private 'bandwidth_policy': Array<BandwidthPolicyDto> | undefined;
    public constructor(bandwidthPolicy?: any) { 
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public withBandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>): UpdateBandwidthPolicyReq {
        this['bandwidth_policy'] = bandwidthPolicy;
        return this;
    }
    public set bandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto> | undefined) {
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public get bandwidthPolicy() {
        return this['bandwidth_policy'];
    }
}