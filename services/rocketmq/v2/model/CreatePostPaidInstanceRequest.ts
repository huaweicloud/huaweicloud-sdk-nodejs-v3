import { CreatePostPaidInstanceReq } from './CreatePostPaidInstanceReq';


export class CreatePostPaidInstanceRequest {
    public body?: CreatePostPaidInstanceReq;
    public constructor() { 
    }
    public withBody(body: CreatePostPaidInstanceReq): CreatePostPaidInstanceRequest {
        this['body'] = body;
        return this;
    }
}