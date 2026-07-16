

export class ServerNetworkHyperCluster {
    public id?: string;
    private 'hyper_cluster_subnet_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ServerNetworkHyperCluster {
        this['id'] = id;
        return this;
    }
    public withHyperClusterSubnetId(hyperClusterSubnetId: string): ServerNetworkHyperCluster {
        this['hyper_cluster_subnet_id'] = hyperClusterSubnetId;
        return this;
    }
    public set hyperClusterSubnetId(hyperClusterSubnetId: string  | undefined) {
        this['hyper_cluster_subnet_id'] = hyperClusterSubnetId;
    }
    public get hyperClusterSubnetId(): string | undefined {
        return this['hyper_cluster_subnet_id'];
    }
}