import { QueueScalingPolicyInfo } from './QueueScalingPolicyInfo';


export class UpdateElasticResourcePoolQueueScalingPolicyInfo {
    private 'queue_scaling_policies'?: Array<QueueScalingPolicyInfo>;
    public constructor(queueScalingPolicies?: Array<QueueScalingPolicyInfo>) { 
        this['queue_scaling_policies'] = queueScalingPolicies;
    }
    public withQueueScalingPolicies(queueScalingPolicies: Array<QueueScalingPolicyInfo>): UpdateElasticResourcePoolQueueScalingPolicyInfo {
        this['queue_scaling_policies'] = queueScalingPolicies;
        return this;
    }
    public set queueScalingPolicies(queueScalingPolicies: Array<QueueScalingPolicyInfo>  | undefined) {
        this['queue_scaling_policies'] = queueScalingPolicies;
    }
    public get queueScalingPolicies(): Array<QueueScalingPolicyInfo> | undefined {
        return this['queue_scaling_policies'];
    }
}