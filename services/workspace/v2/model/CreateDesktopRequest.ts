import { CreateDesktopReq } from './CreateDesktopReq';


export class CreateDesktopRequest {
    public body?: CreateDesktopReq;
    public constructor() { 
    }
    public withBody(body: CreateDesktopReq): CreateDesktopRequest {
        this['body'] = body;
        return this;
    }
}