

export class HyperClusterNetworkInfo {
    private 'hyper_cluster_subnet_id'?: string;
    private 'is_default'?: boolean;
    public constructor() { 
    }
    public withHyperClusterSubnetId(hyperClusterSubnetId: string): HyperClusterNetworkInfo {
        this['hyper_cluster_subnet_id'] = hyperClusterSubnetId;
        return this;
    }
    public set hyperClusterSubnetId(hyperClusterSubnetId: string  | undefined) {
        this['hyper_cluster_subnet_id'] = hyperClusterSubnetId;
    }
    public get hyperClusterSubnetId(): string | undefined {
        return this['hyper_cluster_subnet_id'];
    }
    public withIsDefault(isDefault: boolean): HyperClusterNetworkInfo {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
}