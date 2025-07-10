import { ResizeDesktopReq } from './ResizeDesktopReq';


export class ResizeDesktopRequest {
    public body?: ResizeDesktopReq;
    public constructor() { 
    }
    public withBody(body: ResizeDesktopReq): ResizeDesktopRequest {
        this['body'] = body;
        return this;
    }
}