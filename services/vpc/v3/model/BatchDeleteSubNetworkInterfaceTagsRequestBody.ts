import { DeleteResourceTagRequestBody } from './DeleteResourceTagRequestBody';


export class BatchDeleteSubNetworkInterfaceTagsRequestBody {
    public tags?: Array<DeleteResourceTagRequestBody>;
    public constructor(tags?: Array<DeleteResourceTagRequestBody>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<DeleteResourceTagRequestBody>): BatchDeleteSubNetworkInterfaceTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
}