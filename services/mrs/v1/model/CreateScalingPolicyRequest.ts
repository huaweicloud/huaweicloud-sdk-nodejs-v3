import { AutoScalingPolicyReqV11 } from './AutoScalingPolicyReqV11';


export class CreateScalingPolicyRequest {
    private 'cluster_id'?: string;
    public body?: AutoScalingPolicyReqV11;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateScalingPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: AutoScalingPolicyReqV11): CreateScalingPolicyRequest {
        this['body'] = body;
        return this;
    }
}