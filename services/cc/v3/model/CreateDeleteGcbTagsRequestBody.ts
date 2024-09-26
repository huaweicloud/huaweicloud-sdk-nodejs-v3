import { RequiredTag } from './RequiredTag';


export class CreateDeleteGcbTagsRequestBody {
    public tags?: Array<RequiredTag>;
    public constructor(tags?: Array<RequiredTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<RequiredTag>): CreateDeleteGcbTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}