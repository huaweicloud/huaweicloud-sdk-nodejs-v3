import { DeleteResourceTagRequestBody } from './DeleteResourceTagRequestBody';


export class BatchDeletePortTagsRequestBody {
    public tags?: Array<DeleteResourceTagRequestBody>;
    public constructor(tags?: Array<DeleteResourceTagRequestBody>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<DeleteResourceTagRequestBody>): BatchDeletePortTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}