import { ResourceTag } from './ResourceTag';


export class BatchOperateTagRequestBody {
    public tags?: Array<ResourceTag>;
    public constructor(tags?: Array<ResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<ResourceTag>): BatchOperateTagRequestBody {
        this['tags'] = tags;
        return this;
    }
}