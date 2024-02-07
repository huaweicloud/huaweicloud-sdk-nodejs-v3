import { TagMap } from './TagMap';


export class CreateTagsRequestBody {
    private 'resource_id'?: string;
    public tags?: Array<TagMap>;
    public constructor(resourceId?: string, tags?: Array<TagMap>) { 
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
    public withTags(tags: Array<TagMap>): CreateTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}