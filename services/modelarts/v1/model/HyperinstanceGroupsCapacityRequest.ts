

export class HyperinstanceGroupsCapacityRequest {
    private 'hyperinstance_group_ids'?: Array<string>;
    private 'availability_zone'?: string;
    private 'resource_flavor'?: string;
    public constructor(hyperinstanceGroupIds?: Array<string>, availabilityZone?: string, resourceFlavor?: string) { 
        this['hyperinstance_group_ids'] = hyperinstanceGroupIds;
        this['availability_zone'] = availabilityZone;
        this['resource_flavor'] = resourceFlavor;
    }
    public withHyperinstanceGroupIds(hyperinstanceGroupIds: Array<string>): HyperinstanceGroupsCapacityRequest {
        this['hyperinstance_group_ids'] = hyperinstanceGroupIds;
        return this;
    }
    public set hyperinstanceGroupIds(hyperinstanceGroupIds: Array<string>  | undefined) {
        this['hyperinstance_group_ids'] = hyperinstanceGroupIds;
    }
    public get hyperinstanceGroupIds(): Array<string> | undefined {
        return this['hyperinstance_group_ids'];
    }
    public withAvailabilityZone(availabilityZone: string): HyperinstanceGroupsCapacityRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withResourceFlavor(resourceFlavor: string): HyperinstanceGroupsCapacityRequest {
        this['resource_flavor'] = resourceFlavor;
        return this;
    }
    public set resourceFlavor(resourceFlavor: string  | undefined) {
        this['resource_flavor'] = resourceFlavor;
    }
    public get resourceFlavor(): string | undefined {
        return this['resource_flavor'];
    }
}