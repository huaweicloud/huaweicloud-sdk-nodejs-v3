import { ScaleFlavors } from './ScaleFlavors';


export class Computes {
    private 'group_type'?: string;
    private 'compute_flavors'?: Array<ScaleFlavors>;
    public constructor() { 
    }
    public withGroupType(groupType: string): Computes {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withComputeFlavors(computeFlavors: Array<ScaleFlavors>): Computes {
        this['compute_flavors'] = computeFlavors;
        return this;
    }
    public set computeFlavors(computeFlavors: Array<ScaleFlavors>  | undefined) {
        this['compute_flavors'] = computeFlavors;
    }
    public get computeFlavors(): Array<ScaleFlavors> | undefined {
        return this['compute_flavors'];
    }
}