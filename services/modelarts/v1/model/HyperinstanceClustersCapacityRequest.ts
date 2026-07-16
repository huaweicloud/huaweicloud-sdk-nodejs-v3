

export class HyperinstanceClustersCapacityRequest {
    private 'hyperinstance_cluster_ids'?: Array<string>;
    public flavor?: string;
    private 'availability_zone'?: string;
    private 'resource_flavor'?: string;
    public constructor() { 
    }
    public withHyperinstanceClusterIds(hyperinstanceClusterIds: Array<string>): HyperinstanceClustersCapacityRequest {
        this['hyperinstance_cluster_ids'] = hyperinstanceClusterIds;
        return this;
    }
    public set hyperinstanceClusterIds(hyperinstanceClusterIds: Array<string>  | undefined) {
        this['hyperinstance_cluster_ids'] = hyperinstanceClusterIds;
    }
    public get hyperinstanceClusterIds(): Array<string> | undefined {
        return this['hyperinstance_cluster_ids'];
    }
    public withFlavor(flavor: string): HyperinstanceClustersCapacityRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): HyperinstanceClustersCapacityRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withResourceFlavor(resourceFlavor: string): HyperinstanceClustersCapacityRequest {
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