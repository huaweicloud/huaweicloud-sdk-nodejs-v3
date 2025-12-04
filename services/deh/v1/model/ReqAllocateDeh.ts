import { ReqAllocateDehExtendParam } from './ReqAllocateDehExtendParam';
import { ResourceTag } from './ResourceTag';


export class ReqAllocateDeh {
    public name?: string;
    private 'auto_placement'?: ReqAllocateDehAutoPlacementEnum | string;
    private 'availability_zone'?: string;
    private 'host_type'?: string;
    public quantity?: number;
    public tags?: Array<ResourceTag>;
    private 'extend_param'?: ReqAllocateDehExtendParam;
    public constructor(name?: string, availabilityZone?: string, hostType?: string, quantity?: number) { 
        this['name'] = name;
        this['availability_zone'] = availabilityZone;
        this['host_type'] = hostType;
        this['quantity'] = quantity;
    }
    public withName(name: string): ReqAllocateDeh {
        this['name'] = name;
        return this;
    }
    public withAutoPlacement(autoPlacement: ReqAllocateDehAutoPlacementEnum | string): ReqAllocateDeh {
        this['auto_placement'] = autoPlacement;
        return this;
    }
    public set autoPlacement(autoPlacement: ReqAllocateDehAutoPlacementEnum | string  | undefined) {
        this['auto_placement'] = autoPlacement;
    }
    public get autoPlacement(): ReqAllocateDehAutoPlacementEnum | string | undefined {
        return this['auto_placement'];
    }
    public withAvailabilityZone(availabilityZone: string): ReqAllocateDeh {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withHostType(hostType: string): ReqAllocateDeh {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withQuantity(quantity: number): ReqAllocateDeh {
        this['quantity'] = quantity;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): ReqAllocateDeh {
        this['tags'] = tags;
        return this;
    }
    public withExtendParam(extendParam: ReqAllocateDehExtendParam): ReqAllocateDeh {
        this['extend_param'] = extendParam;
        return this;
    }
    public set extendParam(extendParam: ReqAllocateDehExtendParam  | undefined) {
        this['extend_param'] = extendParam;
    }
    public get extendParam(): ReqAllocateDehExtendParam | undefined {
        return this['extend_param'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReqAllocateDehAutoPlacementEnum {
    OFF = 'off',
    ON = 'on'
}
