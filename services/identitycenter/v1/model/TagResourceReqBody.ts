import { TagDto } from './TagDto';


export class TagResourceReqBody {
    public tags?: Array<TagDto>;
    public constructor(tags?: Array<TagDto>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<TagDto>): TagResourceReqBody {
        this['tags'] = tags;
        return this;
    }
}