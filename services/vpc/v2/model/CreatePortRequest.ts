import { CreatePortRequestBody } from './CreatePortRequestBody';


export class CreatePortRequest {
    public body?: CreatePortRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePortRequestBody): CreatePortRequest {
        this['body'] = body;
        return this;
    }
}