import { CreateLogtankRequestBody } from './CreateLogtankRequestBody';


export class CreateLogtankRequest {
    public body?: CreateLogtankRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateLogtankRequestBody): CreateLogtankRequest {
        this['body'] = body;
        return this;
    }
}