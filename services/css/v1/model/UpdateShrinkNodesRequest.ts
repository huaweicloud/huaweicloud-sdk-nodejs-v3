import { ShrinkNodesReq } from './ShrinkNodesReq';


export class UpdateShrinkNodesRequest {
    private 'cluster_id'?: string;
    public body?: ShrinkNodesReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateShrinkNodesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: ShrinkNodesReq): UpdateShrinkNodesRequest {
        this['body'] = body;
        return this;
    }
}