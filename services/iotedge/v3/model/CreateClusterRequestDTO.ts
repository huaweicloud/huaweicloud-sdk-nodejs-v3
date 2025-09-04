import { ClusterNodeConfig } from './ClusterNodeConfig';


export class CreateClusterRequestDTO {
    private 'cluster_name'?: string;
    public description?: string;
    private 'cluster_node_config'?: ClusterNodeConfig;
    public constructor(clusterName?: string) { 
        this['cluster_name'] = clusterName;
    }
    public withClusterName(clusterName: string): CreateClusterRequestDTO {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDescription(description: string): CreateClusterRequestDTO {
        this['description'] = description;
        return this;
    }
    public withClusterNodeConfig(clusterNodeConfig: ClusterNodeConfig): CreateClusterRequestDTO {
        this['cluster_node_config'] = clusterNodeConfig;
        return this;
    }
    public set clusterNodeConfig(clusterNodeConfig: ClusterNodeConfig  | undefined) {
        this['cluster_node_config'] = clusterNodeConfig;
    }
    public get clusterNodeConfig(): ClusterNodeConfig | undefined {
        return this['cluster_node_config'];
    }
}