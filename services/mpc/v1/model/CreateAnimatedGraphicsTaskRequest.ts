import { CreateAnimatedGraphicsTaskReq } from './CreateAnimatedGraphicsTaskReq';


export class CreateAnimatedGraphicsTaskRequest {
    public body?: CreateAnimatedGraphicsTaskReq;
    public constructor() { 
    }
    public withBody(body: CreateAnimatedGraphicsTaskReq): CreateAnimatedGraphicsTaskRequest {
        this['body'] = body;
        return this;
    }
}