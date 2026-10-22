

export class ServerHpsGroupCapacity {
    private 'availability_zone'?: string;
    private 'hyperinstance_group_id'?: string;
    private 'hyperinstance_group_name'?: string;
    private 'hyperinstance_cluster_id'?: string;
    private 'resource_flavor'?: string;
    private 'is_sold_out'?: boolean;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): ServerHpsGroupCapacity {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withHyperinstanceGroupId(hyperinstanceGroupId: string): ServerHpsGroupCapacity {
        this['hyperinstance_group_id'] = hyperinstanceGroupId;
        return this;
    }
    public set hyperinstanceGroupId(hyperinstanceGroupId: string  | undefined) {
        this['hyperinstance_group_id'] = hyperinstanceGroupId;
    }
    public get hyperinstanceGroupId(): string | undefined {
        return this['hyperinstance_group_id'];
    }
    public withHyperinstanceGroupName(hyperinstanceGroupName: string): ServerHpsGroupCapacity {
        this['hyperinstance_group_name'] = hyperinstanceGroupName;
        return this;
    }
    public set hyperinstanceGroupName(hyperinstanceGroupName: string  | undefined) {
        this['hyperinstance_group_name'] = hyperinstanceGroupName;
    }
    public get hyperinstanceGroupName(): string | undefined {
        return this['hyperinstance_group_name'];
    }
    public withHyperinstanceClusterId(hyperinstanceClusterId: string): ServerHpsGroupCapacity {
        this['hyperinstance_cluster_id'] = hyperinstanceClusterId;
        return this;
    }
    public set hyperinstanceClusterId(hyperinstanceClusterId: string  | undefined) {
        this['hyperinstance_cluster_id'] = hyperinstanceClusterId;
    }
    public get hyperinstanceClusterId(): string | undefined {
        return this['hyperinstance_cluster_id'];
    }
    public withResourceFlavor(resourceFlavor: string): ServerHpsGroupCapacity {
        this['resource_flavor'] = resourceFlavor;
        return this;
    }
    public set resourceFlavor(resourceFlavor: string  | undefined) {
        this['resource_flavor'] = resourceFlavor;
    }
    public get resourceFlavor(): string | undefined {
        return this['resource_flavor'];
    }
    public withIsSoldOut(isSoldOut: boolean): ServerHpsGroupCapacity {
        this['is_sold_out'] = isSoldOut;
        return this;
    }
    public set isSoldOut(isSoldOut: boolean  | undefined) {
        this['is_sold_out'] = isSoldOut;
    }
    public get isSoldOut(): boolean | undefined {
        return this['is_sold_out'];
    }
}