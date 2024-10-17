

export class SecurityGroupRequest {
    private 'instance_id'?: string;
    private 'securitygroup_ids'?: Array<string>;
    public constructor(instanceId?: string, securitygroupIds?: Array<string>) { 
        this['instance_id'] = instanceId;
        this['securitygroup_ids'] = securitygroupIds;
    }
    public withInstanceId(instanceId: string): SecurityGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSecuritygroupIds(securitygroupIds: Array<string>): SecurityGroupRequest {
        this['securitygroup_ids'] = securitygroupIds;
        return this;
    }
    public set securitygroupIds(securitygroupIds: Array<string>  | undefined) {
        this['securitygroup_ids'] = securitygroupIds;
    }
    public get securitygroupIds(): Array<string> | undefined {
        return this['securitygroup_ids'];
    }
}