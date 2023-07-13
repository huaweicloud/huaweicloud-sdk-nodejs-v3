import { CreateGraphReq } from './CreateGraphReq';


export class CreateGraph2Request {
    public body?: CreateGraphReq;
    public constructor() { 
    }
    public withBody(body: CreateGraphReq): CreateGraph2Request {
        this['body'] = body;
        return this;
    }
}