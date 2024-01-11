import { BatchResourceTag } from './BatchResourceTag';


export class BatchAddTagReq {
    public tags?: Array<BatchResourceTag>;
    public constructor(tags?: Array<BatchResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<BatchResourceTag>): BatchAddTagReq {
        this['tags'] = tags;
        return this;
    }
}