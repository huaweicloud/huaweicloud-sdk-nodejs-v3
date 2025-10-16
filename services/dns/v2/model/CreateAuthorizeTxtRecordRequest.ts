import { CreateAuthorizeTxtRecordRequestBody } from './CreateAuthorizeTxtRecordRequestBody';


export class CreateAuthorizeTxtRecordRequest {
    public body?: CreateAuthorizeTxtRecordRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAuthorizeTxtRecordRequestBody): CreateAuthorizeTxtRecordRequest {
        this['body'] = body;
        return this;
    }
}