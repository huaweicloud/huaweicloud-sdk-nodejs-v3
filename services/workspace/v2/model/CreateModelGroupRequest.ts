import { CreateModelGroupReq } from './CreateModelGroupReq';


export class CreateModelGroupRequest {
    public body?: CreateModelGroupReq;
    public constructor() { 
    }
    public withBody(body: CreateModelGroupReq): CreateModelGroupRequest {
        this['body'] = body;
        return this;
    }
}