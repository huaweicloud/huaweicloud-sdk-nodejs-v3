import { ReqCreateTag } from './ReqCreateTag';


export class CreateResourceTagRequest {
    public body?: ReqCreateTag;
    public constructor() { 
    }
    public withBody(body: ReqCreateTag): CreateResourceTagRequest {
        this['body'] = body;
        return this;
    }
}