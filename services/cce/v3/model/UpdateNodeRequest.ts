import { ClusterNodeInformation } from './ClusterNodeInformation';


export class UpdateNodeRequest {
    private 'cluster_id'?: string;
    private 'node_id'?: string;
    private 'Content-Type'?: string;
    public body?: ClusterNodeInformation;
    public constructor(clusterId?: string, nodeId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['node_id'] = nodeId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): UpdateNodeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNodeId(nodeId: string): UpdateNodeRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withContentType(contentType: string): UpdateNodeRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ClusterNodeInformation): UpdateNodeRequest {
        this['body'] = body;
        return this;
    }
}