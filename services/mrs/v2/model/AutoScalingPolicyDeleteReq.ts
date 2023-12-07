

export class AutoScalingPolicyDeleteReq {
    private 'node_group_name'?: string;
    private 'resource_pool_name'?: string;
    public constructor(nodeGroupName?: string, resourcePoolName?: string) { 
        this['node_group_name'] = nodeGroupName;
        this['resource_pool_name'] = resourcePoolName;
    }
    public withNodeGroupName(nodeGroupName: string): AutoScalingPolicyDeleteReq {
        this['node_group_name'] = nodeGroupName;
        return this;
    }
    public set nodeGroupName(nodeGroupName: string  | undefined) {
        this['node_group_name'] = nodeGroupName;
    }
    public get nodeGroupName(): string | undefined {
        return this['node_group_name'];
    }
    public withResourcePoolName(resourcePoolName: string): AutoScalingPolicyDeleteReq {
        this['resource_pool_name'] = resourcePoolName;
        return this;
    }
    public set resourcePoolName(resourcePoolName: string  | undefined) {
        this['resource_pool_name'] = resourcePoolName;
    }
    public get resourcePoolName(): string | undefined {
        return this['resource_pool_name'];
    }
}