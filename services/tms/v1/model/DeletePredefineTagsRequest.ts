import { ReqDeletePredefineTag } from './ReqDeletePredefineTag';


export class DeletePredefineTagsRequest {
    public body?: ReqDeletePredefineTag;
    public constructor() { 
    }
    public withBody(body: ReqDeletePredefineTag): DeletePredefineTagsRequest {
        this['body'] = body;
        return this;
    }
}