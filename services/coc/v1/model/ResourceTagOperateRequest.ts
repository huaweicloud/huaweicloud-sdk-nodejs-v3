import { TagResponse } from './TagResponse';


export class ResourceTagOperateRequest {
    public tags?: Array<TagResponse>;
    public constructor(tags?: Array<TagResponse>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<TagResponse>): ResourceTagOperateRequest {
        this['tags'] = tags;
        return this;
    }
}