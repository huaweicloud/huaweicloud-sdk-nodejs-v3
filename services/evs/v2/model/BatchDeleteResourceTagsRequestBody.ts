import { DeleteResourceTag } from './DeleteResourceTag';


export class BatchDeleteResourceTagsRequestBody {
    public tags?: Array<DeleteResourceTag>;
    public constructor(tags?: Array<DeleteResourceTag>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<DeleteResourceTag>): BatchDeleteResourceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}