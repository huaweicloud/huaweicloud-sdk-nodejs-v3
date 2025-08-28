import { ComputeFlavors } from './ComputeFlavors';


export class ComputeFlavorGroupsInfo {
    public groupType?: string;
    public computeFlavors?: Array<ComputeFlavors>;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public constructor() { 
    }
    public withGroupType(groupType: string): ComputeFlavorGroupsInfo {
        this['groupType'] = groupType;
        return this;
    }
    public withComputeFlavors(computeFlavors: Array<ComputeFlavors>): ComputeFlavorGroupsInfo {
        this['computeFlavors'] = computeFlavors;
        return this;
    }
    public withOffset(offset: number): ComputeFlavorGroupsInfo {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ComputeFlavorGroupsInfo {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ComputeFlavorGroupsInfo {
        this['total'] = total;
        return this;
    }
}