import { BatchDeleteResourceTag } from './BatchDeleteResourceTag';


export class BatchDeleteResourceTags {
    public tags?: Array<BatchDeleteResourceTag>;
    public constructor(tags?: Array<BatchDeleteResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<BatchDeleteResourceTag>): BatchDeleteResourceTags {
        this['tags'] = tags;
        return this;
    }
}