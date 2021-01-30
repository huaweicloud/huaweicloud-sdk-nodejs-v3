import { CreateTemporaryAccessKeyByAgencyRequestBody } from './CreateTemporaryAccessKeyByAgencyRequestBody';


export class CreateTemporaryAccessKeyByAgencyRequest {
    public body?: CreateTemporaryAccessKeyByAgencyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTemporaryAccessKeyByAgencyRequestBody): CreateTemporaryAccessKeyByAgencyRequest {
        this['body'] = body;
        return this;
    }
}