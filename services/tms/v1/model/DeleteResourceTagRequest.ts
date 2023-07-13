import { ReqDeleteTag } from './ReqDeleteTag';


export class DeleteResourceTagRequest {
    public body?: ReqDeleteTag;
    public constructor() { 
    }
    public withBody(body: ReqDeleteTag): DeleteResourceTagRequest {
        this['body'] = body;
        return this;
    }
}