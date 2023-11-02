

export class SecurityGroupRequest {
    private 'resource_id'?: string;
    private 'securitygroup_ids'?: Array<string>;
    public constructor(resourceId?: string, securitygroupIds?: Array<string>) { 
        this['resource_id'] = resourceId;
        this['securitygroup_ids'] = securitygroupIds;
    }
    public withResourceId(resourceId: string): SecurityGroupRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
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