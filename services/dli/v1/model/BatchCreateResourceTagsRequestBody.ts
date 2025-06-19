import { TagWithValues } from './TagWithValues';


export class BatchCreateResourceTagsRequestBody {
    public tags?: Array<TagWithValues>;
    public count?: number;
    public constructor(tags?: Array<TagWithValues>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<TagWithValues>): BatchCreateResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withCount(count: number): BatchCreateResourceTagsRequestBody {
        this['count'] = count;
        return this;
    }
}