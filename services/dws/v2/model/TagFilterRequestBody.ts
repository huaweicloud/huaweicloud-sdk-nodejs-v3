import { TagMultiValue } from './TagMultiValue';


export class TagFilterRequestBody {
    public tags?: Array<TagMultiValue>;
    public constructor() { 
    }
    public withTags(tags: Array<TagMultiValue>): TagFilterRequestBody {
        this['tags'] = tags;
        return this;
    }
}