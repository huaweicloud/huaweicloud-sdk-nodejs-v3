import { TagsOption } from './TagsOption';


export class AddTagsRequestBody {
    public tags?: Array<TagsOption>;
    public constructor(tags?: Array<TagsOption>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<TagsOption>): AddTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}