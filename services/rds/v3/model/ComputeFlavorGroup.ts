import { ComputeFlavor } from './ComputeFlavor';


export class ComputeFlavorGroup {
    private 'group_type'?: string;
    private 'compute_flavors'?: ComputeFlavor;
    public constructor(groupType?: string, computeFlavors?: ComputeFlavor) { 
        this['group_type'] = groupType;
        this['compute_flavors'] = computeFlavors;
    }
    public withGroupType(groupType: string): ComputeFlavorGroup {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): string | undefined {
        return this['group_type'];
    }
    public withComputeFlavors(computeFlavors: ComputeFlavor): ComputeFlavorGroup {
        this['compute_flavors'] = computeFlavors;
        return this;
    }
    public set computeFlavors(computeFlavors: ComputeFlavor  | undefined) {
        this['compute_flavors'] = computeFlavors;
    }
    public get computeFlavors(): ComputeFlavor | undefined {
        return this['compute_flavors'];
    }
}