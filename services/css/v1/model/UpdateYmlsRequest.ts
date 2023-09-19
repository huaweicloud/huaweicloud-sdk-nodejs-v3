import { UpdateYmlsReq } from './UpdateYmlsReq';


export class UpdateYmlsRequest {
    private 'cluster_id'?: string;
    public body?: UpdateYmlsReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateYmlsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdateYmlsReq): UpdateYmlsRequest {
        this['body'] = body;
        return this;
    }
}