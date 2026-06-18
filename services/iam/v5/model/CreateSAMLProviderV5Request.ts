import { CreateSAMLProviderReqBody } from './CreateSAMLProviderReqBody';


export class CreateSAMLProviderV5Request {
    public body?: CreateSAMLProviderReqBody;
    public constructor() { 
    }
    public withBody(body: CreateSAMLProviderReqBody): CreateSAMLProviderV5Request {
        this['body'] = body;
        return this;
    }
}