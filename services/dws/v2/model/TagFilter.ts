

export class TagFilter {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public tags?: string;
    private 'sys_tags'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): TagFilter {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): TagFilter {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withTags(tags: string): TagFilter {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: string): TagFilter {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: string  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): string | undefined {
        return this['sys_tags'];
    }
}