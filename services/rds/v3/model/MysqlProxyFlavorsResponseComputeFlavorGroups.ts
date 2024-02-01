import { MysqlProxyFlavorsResponseComputeFlavors } from './MysqlProxyFlavorsResponseComputeFlavors';


export class MysqlProxyFlavorsResponseComputeFlavorGroups {
    private 'group_type'?: MysqlProxyFlavorsResponseComputeFlavorGroupsGroupTypeEnum | string;
    private 'compute_flavors'?: Array<MysqlProxyFlavorsResponseComputeFlavors>;
    public constructor() { 
    }
    public withGroupType(groupType: MysqlProxyFlavorsResponseComputeFlavorGroupsGroupTypeEnum | string): MysqlProxyFlavorsResponseComputeFlavorGroups {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: MysqlProxyFlavorsResponseComputeFlavorGroupsGroupTypeEnum | string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): MysqlProxyFlavorsResponseComputeFlavorGroupsGroupTypeEnum | string | undefined {
        return this['group_type'];
    }
    public withComputeFlavors(computeFlavors: Array<MysqlProxyFlavorsResponseComputeFlavors>): MysqlProxyFlavorsResponseComputeFlavorGroups {
        this['compute_flavors'] = computeFlavors;
        return this;
    }
    public set computeFlavors(computeFlavors: Array<MysqlProxyFlavorsResponseComputeFlavors>  | undefined) {
        this['compute_flavors'] = computeFlavors;
    }
    public get computeFlavors(): Array<MysqlProxyFlavorsResponseComputeFlavors> | undefined {
        return this['compute_flavors'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MysqlProxyFlavorsResponseComputeFlavorGroupsGroupTypeEnum {
    X86 = 'x86',
    ARM = 'arm'
}
