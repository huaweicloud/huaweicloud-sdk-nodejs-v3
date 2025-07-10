import { CreateDesktopPoolReq } from './CreateDesktopPoolReq';


export class CreateDesktopPoolRequest {
    public body?: CreateDesktopPoolReq;
    public constructor() { 
    }
    public withBody(body: CreateDesktopPoolReq): CreateDesktopPoolRequest {
        this['body'] = body;
        return this;
    }
}