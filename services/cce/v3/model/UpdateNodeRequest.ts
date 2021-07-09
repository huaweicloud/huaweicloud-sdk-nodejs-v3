import { ClusterNodeInformation } from './ClusterNodeInformation';


export class UpdateNodeRequest {
    private 'cluster_id': string | undefined;
    private 'node_id': string | undefined;
    private 'Content-Type': string | undefined;
    public body?: ClusterNodeInformation;
    public constructor(clusterId?: any, nodeId?: any, contentType?: any) { 
        this['cluster_id'] = clusterId;
        this['node_id'] = nodeId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): UpdateNodeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withNodeId(nodeId: string): UpdateNodeRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withContentType(contentType: string): UpdateNodeRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: ClusterNodeInformation): UpdateNodeRequest {
        this['body'] = body;
        return this;
    }
}