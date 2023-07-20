import { CreateQueueReq } from './CreateQueueReq';


export class CreateQueueRequest {
    public body?: CreateQueueReq;
    public constructor() { 
    }
    public withBody(body: CreateQueueReq): CreateQueueRequest {
        this['body'] = body;
        return this;
    }
}