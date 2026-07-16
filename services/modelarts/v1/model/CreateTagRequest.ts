import { Tag } from './Tag';


export class CreateTagRequest {
    public tags?: Array<Tag>;
    public constructor(tags?: Array<Tag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<Tag>): CreateTagRequest {
        this['tags'] = tags;
        return this;
    }
}