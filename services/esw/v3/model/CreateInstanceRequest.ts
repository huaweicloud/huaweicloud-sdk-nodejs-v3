import { CreatePostPaidInstanceRequestBody } from './CreatePostPaidInstanceRequestBody';


export class CreateInstanceRequest {
    public body?: CreatePostPaidInstanceRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePostPaidInstanceRequestBody): CreateInstanceRequest {
        this['body'] = body;
        return this;
    }
}