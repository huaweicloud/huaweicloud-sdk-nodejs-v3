import { CreateOIDCProviderReqBody } from './CreateOIDCProviderReqBody';


export class CreateOIDCProviderV5Request {
    public body?: CreateOIDCProviderReqBody;
    public constructor() { 
    }
    public withBody(body: CreateOIDCProviderReqBody): CreateOIDCProviderV5Request {
        this['body'] = body;
        return this;
    }
}