import { AutoScalingPolicy } from './AutoScalingPolicy';


export class AutoScalingPolicyReqV11 {
    private 'node_group': AutoScalingPolicyReqV11NodeGroupEnum | undefined;
    private 'auto_scaling_policy': AutoScalingPolicy | undefined;
    public constructor(nodeGroup?: any, autoScalingPolicy?: any) { 
        this['node_group'] = nodeGroup;
        this['auto_scaling_policy'] = autoScalingPolicy;
    }
    public withNodeGroup(nodeGroup: AutoScalingPolicyReqV11NodeGroupEnum): AutoScalingPolicyReqV11 {
        this['node_group'] = nodeGroup;
        return this;
    }
    public set nodeGroup(nodeGroup: AutoScalingPolicyReqV11NodeGroupEnum | undefined) {
        this['node_group'] = nodeGroup;
    }
    public get nodeGroup() {
        return this['node_group'];
    }
    public withAutoScalingPolicy(autoScalingPolicy: AutoScalingPolicy): AutoScalingPolicyReqV11 {
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

/**
    * @export
    * @enum {string}
    */
export enum AutoScalingPolicyReqV11NodeGroupEnum {
    TASK_NODE_DEFAULT_GROUP = 'task_node_default_group'
}
