import { CreateAuthInfoReq } from './CreateAuthInfoReq';


export class CreateAuthInfoRequest {
    public body?: CreateAuthInfoReq;
    public constructor() { 
    }
    public withBody(body: CreateAuthInfoReq): CreateAuthInfoRequest {
        this['body'] = body;
        return this;
    }
}