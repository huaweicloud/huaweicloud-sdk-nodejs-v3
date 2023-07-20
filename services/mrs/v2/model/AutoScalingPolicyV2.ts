import { AutoScalingPolicy } from './AutoScalingPolicy';


export class AutoScalingPolicyV2 {
    private 'node_group_name'?: string;
    private 'resource_pool_name'?: string;
    private 'auto_scaling_policy'?: AutoScalingPolicy;
    public constructor(resourcePoolName?: string) { 
        this['resource_pool_name'] = resourcePoolName;
    }
    public withNodeGroupName(nodeGroupName: string): AutoScalingPolicyV2 {
        this['node_group_name'] = nodeGroupName;
        return this;
    }
    public set nodeGroupName(nodeGroupName: string  | undefined) {
        this['node_group_name'] = nodeGroupName;
    }
    public get nodeGroupName(): string | undefined {
        return this['node_group_name'];
    }
    public withResourcePoolName(resourcePoolName: string): AutoScalingPolicyV2 {
        this['resource_pool_name'] = resourcePoolName;
        return this;
    }
    public set resourcePoolName(resourcePoolName: string  | undefined) {
        this['resource_pool_name'] = resourcePoolName;
    }
    public get resourcePoolName(): string | undefined {
        return this['resource_pool_name'];
    }
    public withAutoScalingPolicy(autoScalingPolicy: AutoScalingPolicy): AutoScalingPolicyV2 {
        this['auto_scaling_policy'] = autoScalingPolicy;
        return this;
    }
    public set autoScalingPolicy(autoScalingPolicy: AutoScalingPolicy  | undefined) {
        this['auto_scaling_policy'] = autoScalingPolicy;
    }
    public get autoScalingPolicy(): AutoScalingPolicy | undefined {
        return this['auto_scaling_policy'];
    }
}