import { RoleExtendReq } from './RoleExtendReq';


export class UpdateExtendInstanceStorageRequest {
    private 'cluster_id'?: string;
    public body?: RoleExtendReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateExtendInstanceStorageRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: RoleExtendReq): UpdateExtendInstanceStorageRequest {
        this['body'] = body;
        return this;
    }
}