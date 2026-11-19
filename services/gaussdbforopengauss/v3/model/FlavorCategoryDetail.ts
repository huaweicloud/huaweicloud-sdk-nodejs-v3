import { ComputeFlavorGroupDetail } from './ComputeFlavorGroupDetail';
import { DecServiceFlavorItemDetail } from './DecServiceFlavorItemDetail';
import { VolumeFlavorItemDetail } from './VolumeFlavorItemDetail';


export class FlavorCategoryDetail {
    private 'compute_flavor_groups'?: Array<ComputeFlavorGroupDetail>;
    private 'volume_flavors'?: Array<VolumeFlavorItemDetail>;
    private 'dec_service_flavors'?: Array<DecServiceFlavorItemDetail>;
    public constructor() { 
    }
    public withComputeFlavorGroups(computeFlavorGroups: Array<ComputeFlavorGroupDetail>): FlavorCategoryDetail {
        this['compute_flavor_groups'] = computeFlavorGroups;
        return this;
    }
    public set computeFlavorGroups(computeFlavorGroups: Array<ComputeFlavorGroupDetail>  | undefined) {
        this['compute_flavor_groups'] = computeFlavorGroups;
    }
    public get computeFlavorGroups(): Array<ComputeFlavorGroupDetail> | undefined {
        return this['compute_flavor_groups'];
    }
    public withVolumeFlavors(volumeFlavors: Array<VolumeFlavorItemDetail>): FlavorCategoryDetail {
        this['volume_flavors'] = volumeFlavors;
        return this;
    }
    public set volumeFlavors(volumeFlavors: Array<VolumeFlavorItemDetail>  | undefined) {
        this['volume_flavors'] = volumeFlavors;
    }
    public get volumeFlavors(): Array<VolumeFlavorItemDetail> | undefined {
        return this['volume_flavors'];
    }
    public withDecServiceFlavors(decServiceFlavors: Array<DecServiceFlavorItemDetail>): FlavorCategoryDetail {
        this['dec_service_flavors'] = decServiceFlavors;
        return this;
    }
    public set decServiceFlavors(decServiceFlavors: Array<DecServiceFlavorItemDetail>  | undefined) {
        this['dec_service_flavors'] = decServiceFlavors;
    }
    public get decServiceFlavors(): Array<DecServiceFlavorItemDetail> | undefined {
        return this['dec_service_flavors'];
    }
}