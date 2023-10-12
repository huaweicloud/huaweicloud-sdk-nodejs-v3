import { ClusterDescriptionInfo } from './ClusterDescriptionInfo';


export class SaveClusterDescriptionInfoRequest {
    private 'cluster_id'?: string;
    public namespace?: string;
    public body?: ClusterDescriptionInfo;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): SaveClusterDescriptionInfoRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): SaveClusterDescriptionInfoRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withBody(body: ClusterDescriptionInfo): SaveClusterDescriptionInfoRequest {
        this['body'] = body;
        return this;
    }
}