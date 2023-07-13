import { CreateMediaProcessReq } from './CreateMediaProcessReq';


export class CreateMediaProcessTaskRequest {
    public body?: CreateMediaProcessReq;
    public constructor() { 
    }
    public withBody(body: CreateMediaProcessReq): CreateMediaProcessTaskRequest {
        this['body'] = body;
        return this;
    }
}