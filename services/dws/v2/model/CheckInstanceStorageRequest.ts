import { V1DiskExtExpandReq } from './V1DiskExtExpandReq';


export class CheckInstanceStorageRequest {
    private 'cluster_id'?: string;
    public body?: V1DiskExtExpandReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CheckInstanceStorageRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: V1DiskExtExpandReq): CheckInstanceStorageRequest {
        this['body'] = body;
        return this;
    }
}