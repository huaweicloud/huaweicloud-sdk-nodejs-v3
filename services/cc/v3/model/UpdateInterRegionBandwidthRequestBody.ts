import { UpdateInterRegionBandwidth } from './UpdateInterRegionBandwidth';


export class UpdateInterRegionBandwidthRequestBody {
    private 'inter_region_bandwidth'?: UpdateInterRegionBandwidth;
    public constructor(interRegionBandwidth?: UpdateInterRegionBandwidth) { 
        this['inter_region_bandwidth'] = interRegionBandwidth;
    }
    public withInterRegionBandwidth(interRegionBandwidth: UpdateInterRegionBandwidth): UpdateInterRegionBandwidthRequestBody {
        this['inter_region_bandwidth'] = interRegionBandwidth;
        return this;
    }
    public set interRegionBandwidth(interRegionBandwidth: UpdateInterRegionBandwidth  | undefined) {
        this['inter_region_bandwidth'] = interRegionBandwidth;
    }
    public get interRegionBandwidth(): UpdateInterRegionBandwidth | undefined {
        return this['inter_region_bandwidth'];
    }
}