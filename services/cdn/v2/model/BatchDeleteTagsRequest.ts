import { DeleteTagsRequestBody } from './DeleteTagsRequestBody';


export class BatchDeleteTagsRequest {
    public body?: DeleteTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteTagsRequestBody): BatchDeleteTagsRequest {
        this['body'] = body;
        return this;
    }
}