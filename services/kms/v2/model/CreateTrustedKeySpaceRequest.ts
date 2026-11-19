import { CreateTrustedKeySpaceRequestBody } from './CreateTrustedKeySpaceRequestBody';


export class CreateTrustedKeySpaceRequest {
    public body?: CreateTrustedKeySpaceRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTrustedKeySpaceRequestBody): CreateTrustedKeySpaceRequest {
        this['body'] = body;
        return this;
    }
}