

export class RemoveResourceFromGroupRequest {
    private 'group_id'?: string;
    private 'resource_id'?: string;
    public constructor(groupId?: string, resourceId?: string) { 
        this['group_id'] = groupId;
        this['resource_id'] = resourceId;
    }
    public withGroupId(groupId: string): RemoveResourceFromGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withResourceId(resourceId: string): RemoveResourceFromGroupRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}