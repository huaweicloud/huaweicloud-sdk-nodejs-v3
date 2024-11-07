import { CrossRegionTypeEnum } from './CrossRegionTypeEnum';


export class CrossRegionType {
    private 'cross_region_type'?: CrossRegionTypeEnum;
    public constructor(crossRegionType?: CrossRegionTypeEnum) { 
        this['cross_region_type'] = crossRegionType;
    }
    public withCrossRegionType(crossRegionType: CrossRegionTypeEnum): CrossRegionType {
        this['cross_region_type'] = crossRegionType;
        return this;
    }
    public set crossRegionType(crossRegionType: CrossRegionTypeEnum  | undefined) {
        this['cross_region_type'] = crossRegionType;
    }
    public get crossRegionType(): CrossRegionTypeEnum | undefined {
        return this['cross_region_type'];
    }
}