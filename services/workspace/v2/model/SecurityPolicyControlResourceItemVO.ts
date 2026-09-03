

export class SecurityPolicyControlResourceItemVO {
    public id?: string;
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withId(id: string): SecurityPolicyControlResourceItemVO {
        this['id'] = id;
        return this;
    }
    public withResourceType(resourceType: string): SecurityPolicyControlResourceItemVO {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): SecurityPolicyControlResourceItemVO {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): SecurityPolicyControlResourceItemVO {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withCreateTime(createTime: string): SecurityPolicyControlResourceItemVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}