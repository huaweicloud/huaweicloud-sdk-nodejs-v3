import { AutoScalingPolicyDeleteReq } from './AutoScalingPolicyDeleteReq';


export class DeleteAutoScalingPolicyRequest {
    private 'cluster_id'?: string;
    public body?: AutoScalingPolicyDeleteReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): DeleteAutoScalingPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: AutoScalingPolicyDeleteReq): DeleteAutoScalingPolicyRequest {
        this['body'] = body;
        return this;
    }
}