import { Volume } from './Volume';


export class CheckEdgeSiteResourcesReq {
    private 'availability_zone_id'?: string;
    private 'flavor_id'?: string;
    private 'resource_counts'?: number;
    public volumes?: Array<Volume>;
    public constructor(availabilityZoneId?: string) { 
        this['availability_zone_id'] = availabilityZoneId;
    }
    public withAvailabilityZoneId(availabilityZoneId: string): CheckEdgeSiteResourcesReq {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
    public withFlavorId(flavorId: string): CheckEdgeSiteResourcesReq {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withResourceCounts(resourceCounts: number): CheckEdgeSiteResourcesReq {
        this['resource_counts'] = resourceCounts;
        return this;
    }
    public set resourceCounts(resourceCounts: number  | undefined) {
        this['resource_counts'] = resourceCounts;
    }
    public get resourceCounts(): number | undefined {
        return this['resource_counts'];
    }
    public withVolumes(volumes: Array<Volume>): CheckEdgeSiteResourcesReq {
        this['volumes'] = volumes;
        return this;
    }
}