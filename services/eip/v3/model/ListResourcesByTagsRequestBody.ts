import { CreateTag } from './CreateTag';


export class ListResourcesByTagsRequestBody {
    public tags?: Array<CreateTag>;
    public constructor(tags?: Array<CreateTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<CreateTag>): ListResourcesByTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}