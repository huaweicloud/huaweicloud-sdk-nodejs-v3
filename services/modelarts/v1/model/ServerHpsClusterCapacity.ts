

export class ServerHpsClusterCapacity {
    public flavor?: string;
    private 'availability_zone'?: string;
    private 'hyperinstance_cluster_id'?: string;
    private 'hyperinstance_cluster_name'?: string;
    private 'resource_flavor'?: string;
    private 'is_sold_out'?: boolean;
    public constructor() { 
    }
    public withFlavor(flavor: string): ServerHpsClusterCapacity {
        this['flavor'] = flavor;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ServerHpsClusterCapacity {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withHyperinstanceClusterId(hyperinstanceClusterId: string): ServerHpsClusterCapacity {
        this['hyperinstance_cluster_id'] = hyperinstanceClusterId;
        return this;
    }
    public set hyperinstanceClusterId(hyperinstanceClusterId: string  | undefined) {
        this['hyperinstance_cluster_id'] = hyperinstanceClusterId;
    }
    public get hyperinstanceClusterId(): string | undefined {
        return this['hyperinstance_cluster_id'];
    }
    public withHyperinstanceClusterName(hyperinstanceClusterName: string): ServerHpsClusterCapacity {
        this['hyperinstance_cluster_name'] = hyperinstanceClusterName;
        return this;
    }
    public set hyperinstanceClusterName(hyperinstanceClusterName: string  | undefined) {
        this['hyperinstance_cluster_name'] = hyperinstanceClusterName;
    }
    public get hyperinstanceClusterName(): string | undefined {
        return this['hyperinstance_cluster_name'];
    }
    public withResourceFlavor(resourceFlavor: string): ServerHpsClusterCapacity {
        this['resource_flavor'] = resourceFlavor;
        return this;
    }
    public set resourceFlavor(resourceFlavor: string  | undefined) {
        this['resource_flavor'] = resourceFlavor;
    }
    public get resourceFlavor(): string | undefined {
        return this['resource_flavor'];
    }
    public withIsSoldOut(isSoldOut: boolean): ServerHpsClusterCapacity {
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