

export class ShowTagQuotaRequest {
    private 'cluster_id'?: string;
    private 'auto_scaling_policy_tags'?: boolean;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ShowTagQuotaRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAutoScalingPolicyTags(autoScalingPolicyTags: boolean): ShowTagQuotaRequest {
        this['auto_scaling_policy_tags'] = autoScalingPolicyTags;
        return this;
    }
    public set autoScalingPolicyTags(autoScalingPolicyTags: boolean  | undefined) {
        this['auto_scaling_policy_tags'] = autoScalingPolicyTags;
    }
    public get autoScalingPolicyTags(): boolean | undefined {
        return this['auto_scaling_policy_tags'];
    }
}