import { TagsFilter } from './TagsFilter';


export class ListResourceInstancesRequestBody {
    public tags?: Array<TagsFilter>;
    public constructor() { 
    }
    public withTags(tags: Array<TagsFilter>): ListResourceInstancesRequestBody {
        this['tags'] = tags;
        return this;
    }
}