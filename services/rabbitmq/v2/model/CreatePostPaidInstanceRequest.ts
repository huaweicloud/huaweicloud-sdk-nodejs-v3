import { CreateInstanceReq } from './CreateInstanceReq';


export class CreatePostPaidInstanceRequest {
    public body?: CreateInstanceReq;
    public constructor() { 
    }
    public withBody(body: CreateInstanceReq): CreatePostPaidInstanceRequest {
        this['body'] = body;
        return this;
    }
}