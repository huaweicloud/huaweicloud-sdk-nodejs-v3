import { CreateAliasRequestBody } from './CreateAliasRequestBody';


export class CreateAliasRequest {
    public body?: CreateAliasRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAliasRequestBody): CreateAliasRequest {
        this['body'] = body;
        return this;
    }
}