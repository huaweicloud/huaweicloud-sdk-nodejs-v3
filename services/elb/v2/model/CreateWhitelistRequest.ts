import { CreateWhitelistRequestBody } from './CreateWhitelistRequestBody';


export class CreateWhitelistRequest {
    public body?: CreateWhitelistRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateWhitelistRequestBody): CreateWhitelistRequest {
        this['body'] = body;
        return this;
    }
}