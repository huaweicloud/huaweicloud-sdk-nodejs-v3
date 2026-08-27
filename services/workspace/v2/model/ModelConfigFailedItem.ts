

export class ModelConfigFailedItem {
    private 'group_id'?: string;
    private 'resource_id'?: string;
    public reason?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): ModelConfigFailedItem {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withResourceId(resourceId: string): ModelConfigFailedItem {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withReason(reason: string): ModelConfigFailedItem {
        this['reason'] = reason;
        return this;
    }
}