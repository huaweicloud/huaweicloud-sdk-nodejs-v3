import { CreateNodesInstallCmdV3RequestBody } from './CreateNodesInstallCmdV3RequestBody';


export class CreateClusterNodesInstallCmdRequest {
    private 'cluster_id'?: string;
    public body?: CreateNodesInstallCmdV3RequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateClusterNodesInstallCmdRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CreateNodesInstallCmdV3RequestBody): CreateClusterNodesInstallCmdRequest {
        this['body'] = body;
        return this;
    }
}