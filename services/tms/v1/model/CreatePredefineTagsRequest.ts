import { ReqCreatePredefineTag } from './ReqCreatePredefineTag';


export class CreatePredefineTagsRequest {
    public body?: ReqCreatePredefineTag;
    public constructor() { 
    }
    public withBody(body: ReqCreatePredefineTag): CreatePredefineTagsRequest {
        this['body'] = body;
        return this;
    }
}