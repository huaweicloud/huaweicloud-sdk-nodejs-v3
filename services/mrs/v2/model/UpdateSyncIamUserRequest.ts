import { UpdateSyncRequest } from './UpdateSyncRequest';


export class UpdateSyncIamUserRequest {
    private 'cluster_id'?: string;
    public body?: UpdateSyncRequest;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateSyncIamUserRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdateSyncRequest): UpdateSyncIamUserRequest {
        this['body'] = body;
        return this;
    }
}