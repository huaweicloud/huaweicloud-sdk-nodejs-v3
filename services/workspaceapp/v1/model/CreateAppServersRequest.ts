import { CreateAppServerReq } from './CreateAppServerReq';


export class CreateAppServersRequest {
    public body?: CreateAppServerReq;
    public constructor() { 
    }
    public withBody(body: CreateAppServerReq): CreateAppServersRequest {
        this['body'] = body;
        return this;
    }
}