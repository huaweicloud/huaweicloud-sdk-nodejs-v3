import { BatchResourceTag } from './BatchResourceTag';


export class BatchDeleteTagReq {
    public tags?: Array<BatchResourceTag>;
    public constructor(tags?: Array<BatchResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<BatchResourceTag>): BatchDeleteTagReq {
        this['tags'] = tags;
        return this;
    }
}