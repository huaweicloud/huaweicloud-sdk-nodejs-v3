import { BatchCreateResourceTag } from './BatchCreateResourceTag';


export class BatchCreateResourceTags {
    public tags: Array<BatchCreateResourceTag>;
    public constructor(tags?: any) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<BatchCreateResourceTag>): BatchCreateResourceTags {
        this['tags'] = tags;
        return this;
    }
}