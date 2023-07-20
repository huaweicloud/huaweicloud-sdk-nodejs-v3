

export class CreateTagsRequestBody {
    private 'resource_id'?: string;
    public tags?: Array<any>;
    public constructor(resourceId?: string, tags?: Array<any>) { 
        this['resource_id'] = resourceId;
        this['tags'] = tags;
    }
    public withResourceId(resourceId: string): CreateTagsRequestBody {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withTags(tags: Array<any>): CreateTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}