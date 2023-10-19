import { InstanceOrderReq } from './InstanceOrderReq';


export class CreateOrderRequest {
    public body?: InstanceOrderReq;
    public constructor() { 
    }
    public withBody(body: InstanceOrderReq): CreateOrderRequest {
        this['body'] = body;
        return this;
    }
}