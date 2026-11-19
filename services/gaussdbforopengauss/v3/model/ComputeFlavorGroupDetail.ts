import { ComputeFlavorItemDetail } from './ComputeFlavorItemDetail';


export class ComputeFlavorGroupDetail {
    private 'group_type'?: ComputeFlavorGroupDetailGroupTypeEnum | string;
    private 'compute_flavors'?: Array<ComputeFlavorItemDetail>;
    public constructor() { 
    }
    public withGroupType(groupType: ComputeFlavorGroupDetailGroupTypeEnum | string): ComputeFlavorGroupDetail {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: ComputeFlavorGroupDetailGroupTypeEnum | string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): ComputeFlavorGroupDetailGroupTypeEnum | string | undefined {
        return this['group_type'];
    }
    public withComputeFlavors(computeFlavors: Array<ComputeFlavorItemDetail>): ComputeFlavorGroupDetail {
        this['compute_flavors'] = computeFlavors;
        return this;
    }
    public set computeFlavors(computeFlavors: Array<ComputeFlavorItemDetail>  | undefined) {
        this['compute_flavors'] = computeFlavors;
    }
    public get computeFlavors(): Array<ComputeFlavorItemDetail> | undefined {
        return this['compute_flavors'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComputeFlavorGroupDetailGroupTypeEnum {
    NORMAL = 'normal',
    NORMAL2 = 'normal2',
    ARMFLAVORS = 'armFlavors',
    EXCLUSIVE = 'exclusive',
    ARMEXCLUSIVE = 'armExclusive',
    ECONOMICAL = 'economical',
    ECONOMICAL2 = 'economical2',
    ARMFLAVORS2 = 'armFlavors2',
    GENERAL = 'general'
}
