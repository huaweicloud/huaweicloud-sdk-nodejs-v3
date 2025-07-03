import { ShowOrderStatusReq } from './ShowOrderStatusReq';


export class ShowOrderStatusRequest {
    public body?: ShowOrderStatusReq;
    public constructor() { 
    }
    public withBody(body: ShowOrderStatusReq): ShowOrderStatusRequest {
        this['body'] = body;
        return this;
    }
}