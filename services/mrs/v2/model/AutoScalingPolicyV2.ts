import { AutoScalingPolicy } from './AutoScalingPolicy';


export class AutoScalingPolicyV2 {
    private 'node_group_name'?: string | undefined;
    private 'resource_pool_name': string | undefined;
    private 'auto_scaling_policy'?: AutoScalingPolicy | undefined;
    public constructor(resourcePoolName?: any) { 
        this['resource_pool_name'] = resourcePoolName;
    }
    public withNodeGroupName(nodeGroupName: string): AutoScalingPolicyV2 {
        this['node_group_name'] = nodeGroupName;
        return this;
    }
    public set nodeGroupName(nodeGroupName: string | undefined) {
        this['node_group_name'] = nodeGroupName;
    }
    public get nodeGroupName() {
        return this['node_group_name'];
    }
    public withResourcePoolName(resourcePoolName: string): AutoScalingPolicyV2 {
        this['resource_pool_name'] = resourcePoolName;
        return this;
    }
    public set resourcePoolName(resourcePoolName: string | undefined) {
        this['resource_pool_name'] = resourcePoolName;
    }
    public get resourcePoolName() {
        return this['resource_pool_name'];
    }
    public withAutoScalingPolicy(autoScalingPolicy: AutoScalingPolicy): AutoScalingPolicyV2 {
        this['auto_scaling_policy'] = autoScalingPolicy;
        return this;
    }
    public set autoScalingPolicy(autoScalingPolicy: AutoScalingPolicy | undefined) {
        this['auto_scaling_policy'] = autoScalingPolicy;
    }
    public get autoScalingPolicy() {
        return this['auto_scaling_policy'];
    }
}