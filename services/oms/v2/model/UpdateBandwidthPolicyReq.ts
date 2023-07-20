import { BandwidthPolicyDto } from './BandwidthPolicyDto';


export class UpdateBandwidthPolicyReq {
    private 'bandwidth_policy'?: Array<BandwidthPolicyDto>;
    public constructor(bandwidthPolicy?: Array<BandwidthPolicyDto>) { 
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public withBandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>): UpdateBandwidthPolicyReq {
        this['bandwidth_policy'] = bandwidthPolicy;
        return this;
    }
    public set bandwidthPolicy(bandwidthPolicy: Array<BandwidthPolicyDto>  | undefined) {
        this['bandwidth_policy'] = bandwidthPolicy;
    }
    public get bandwidthPolicy(): Array<BandwidthPolicyDto> | undefined {
        return this['bandwidth_policy'];
    }
}