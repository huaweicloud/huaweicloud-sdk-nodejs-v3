import { CreateInterRegionBandwidth } from './CreateInterRegionBandwidth';


export class CreateInterRegionBandwidthRequestBody {
    private 'inter_region_bandwidth'?: CreateInterRegionBandwidth;
    public constructor(interRegionBandwidth?: CreateInterRegionBandwidth) { 
        this['inter_region_bandwidth'] = interRegionBandwidth;
    }
    public withInterRegionBandwidth(interRegionBandwidth: CreateInterRegionBandwidth): CreateInterRegionBandwidthRequestBody {
        this['inter_region_bandwidth'] = interRegionBandwidth;
        return this;
    }
    public set interRegionBandwidth(interRegionBandwidth: CreateInterRegionBandwidth  | undefined) {
        this['inter_region_bandwidth'] = interRegionBandwidth;
    }
    public get interRegionBandwidth(): CreateInterRegionBandwidth | undefined {
        return this['inter_region_bandwidth'];
    }
}