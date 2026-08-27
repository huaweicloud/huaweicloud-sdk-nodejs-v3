

export class ModelGroupResourceItemResp {
    public id?: number;
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'created_time'?: string;
    public constructor() { 
    }
    public withId(id: number): ModelGroupResourceItemResp {
        this['id'] = id;
        return this;
    }
    public withResourceType(resourceType: string): ModelGroupResourceItemResp {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ModelGroupResourceItemResp {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ModelGroupResourceItemResp {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withCreatedTime(createdTime: string): ModelGroupResourceItemResp {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
}