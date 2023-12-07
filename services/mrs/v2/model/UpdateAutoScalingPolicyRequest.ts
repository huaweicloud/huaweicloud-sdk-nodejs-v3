import { AutoScalingPolicyV2 } from './AutoScalingPolicyV2';


export class UpdateAutoScalingPolicyRequest {
    private 'cluster_id'?: string;
    public body?: AutoScalingPolicyV2;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateAutoScalingPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: AutoScalingPolicyV2): UpdateAutoScalingPolicyRequest {
        this['body'] = body;
        return this;
    }
}