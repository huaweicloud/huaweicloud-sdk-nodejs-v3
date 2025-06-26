import { CreateOrderReq } from './CreateOrderReq';


export class CreateOrderRequest {
    public body?: CreateOrderReq;
    public constructor() { 
    }
    public withBody(body: CreateOrderReq): CreateOrderRequest {
        this['body'] = body;
        return this;
    }
}