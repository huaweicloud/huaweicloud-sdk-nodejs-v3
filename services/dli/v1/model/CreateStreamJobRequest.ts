import { CreateStreamJobRequestBody } from './CreateStreamJobRequestBody';


export class CreateStreamJobRequest {
    public body?: CreateStreamJobRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateStreamJobRequestBody): CreateStreamJobRequest {
        this['body'] = body;
        return this;
    }
}