import { DeleteConfReqNew } from './DeleteConfReqNew';


export class DeleteLogstashConfRequest {
    private 'cluster_id'?: string;
    public body?: DeleteConfReqNew;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): DeleteLogstashConfRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: DeleteConfReqNew): DeleteLogstashConfRequest {
        this['body'] = body;
        return this;
    }
}