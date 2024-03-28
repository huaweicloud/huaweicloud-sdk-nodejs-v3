import { QueueScalingPolicy } from './QueueScalingPolicy';


export class UpdateElasticResourcePoolQueueRequestBody {
    private 'queue_scaling_policies'?: Array<QueueScalingPolicy>;
    public constructor(queueScalingPolicies?: Array<QueueScalingPolicy>) { 
        this['queue_scaling_policies'] = queueScalingPolicies;
    }
    public withQueueScalingPolicies(queueScalingPolicies: Array<QueueScalingPolicy>): UpdateElasticResourcePoolQueueRequestBody {
        this['queue_scaling_policies'] = queueScalingPolicies;
        return this;
    }
    public set queueScalingPolicies(queueScalingPolicies: Array<QueueScalingPolicy>  | undefined) {
        this['queue_scaling_policies'] = queueScalingPolicies;
    }
    public get queueScalingPolicies(): Array<QueueScalingPolicy> | undefined {
        return this['queue_scaling_policies'];
    }
}