import { CreatePostPaidServersRequestBody } from './CreatePostPaidServersRequestBody';


export class CreatePostPaidServersRequest {
    public body?: CreatePostPaidServersRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePostPaidServersRequestBody): CreatePostPaidServersRequest {
        this['body'] = body;
        return this;
    }
}