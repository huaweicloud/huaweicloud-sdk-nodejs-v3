import { CreateSnapshotPolicyRequestBody } from './CreateSnapshotPolicyRequestBody';


export class CreateSnapshotPolicyRequest {
    private 'cluster_id'?: string;
    public body?: CreateSnapshotPolicyRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateSnapshotPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CreateSnapshotPolicyRequestBody): CreateSnapshotPolicyRequest {
        this['body'] = body;
        return this;
    }
}