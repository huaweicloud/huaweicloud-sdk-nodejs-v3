import { ResourceTags } from './ResourceTags';


export class ListResourcesByTagsRequestBody {
    public tags?: Array<ResourceTags>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTags>): ListResourcesByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}