import { CancelSyncRequest } from './CancelSyncRequest';


export class CancelSyncIamUserRequest {
    private 'cluster_id'?: string;
    public body?: CancelSyncRequest;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CancelSyncIamUserRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CancelSyncRequest): CancelSyncIamUserRequest {
        this['body'] = body;
        return this;
    }
}