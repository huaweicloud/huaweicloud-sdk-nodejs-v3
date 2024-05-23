import { ResourceUnTag } from './ResourceUnTag';


export class UnTagsReq {
    public tags?: Array<ResourceUnTag>;
    public constructor() { 
    }
    public withTags(tags: Array<ResourceUnTag>): UnTagsReq {
        this['tags'] = tags;
        return this;
    }
}