import { VolumeFlavor } from './VolumeFlavor';


export class RecommendFlavor {
    public type?: RecommendFlavorTypeEnum | string;
    private 'flavor_ref'?: string;
    public cpu?: string;
    public mem?: string;
    private 'group_type'?: string;
    private 'volume_flavors'?: Array<VolumeFlavor>;
    public constructor(type?: string, flavorRef?: string, cpu?: string, mem?: string, groupType?: string, volumeFlavors?: Array<VolumeFlavor>) { 
        this['type'] = type;
        this['flavor_ref'] = flavorRef;
        this['cpu'] = cpu;
        this['mem'] = mem;
        this['group_type'] = groupType;
        this['volume_flavors'] = volumeFlavors;
    }
    public withType(type: RecommendFlavorTypeEnum | string): RecommendFlavor {
        this['type'] = type;
        return this;
    }
    public withFlavorRef(flavorRef: string): RecommendFlavor {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withCpu(cpu: string): RecommendFlavor {
        this['cpu'] = cpu;
        return this;
    }
    public withMem(mem: string): RecommendFlavor {
        this['mem'] = mem;
        return this;
    }
    public withGroupType(groupType: string): RecommendFlavor {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withVolumeFlavors(volumeFlavors: Array<VolumeFlavor>): RecommendFlavor {
        this['volume_flavors'] = volumeFlavors;
        return this;
    }
    public set volumeFlavors(volumeFlavors: Array<VolumeFlavor>  | undefined) {
        this['volume_flavors'] = volumeFlavors;
    }
    public get volumeFlavors(): Array<VolumeFlavor> | undefined {
        return this['volume_flavors'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecommendFlavorTypeEnum {
    HA = 'Ha',
    SINGLE = 'Single'
}
