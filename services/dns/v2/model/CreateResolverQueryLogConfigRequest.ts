import { CreateResolverQueryLogConfigRequestBody } from './CreateResolverQueryLogConfigRequestBody';


export class CreateResolverQueryLogConfigRequest {
    public body?: CreateResolverQueryLogConfigRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateResolverQueryLogConfigRequestBody): CreateResolverQueryLogConfigRequest {
        this['body'] = body;
        return this;
    }
}