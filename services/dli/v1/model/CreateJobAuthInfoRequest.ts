import { CreateJobAuthInfoRequestBody } from './CreateJobAuthInfoRequestBody';


export class CreateJobAuthInfoRequest {
    public body?: CreateJobAuthInfoRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateJobAuthInfoRequestBody): CreateJobAuthInfoRequest {
        this['body'] = body;
        return this;
    }
}