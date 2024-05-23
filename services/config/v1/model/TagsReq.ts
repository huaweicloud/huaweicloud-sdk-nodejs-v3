import { ResourceTag } from './ResourceTag';


export class TagsReq {
    public tags?: Array<ResourceTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceTag>): TagsReq {
        this['tags'] = tags;
        return this;
    }
}