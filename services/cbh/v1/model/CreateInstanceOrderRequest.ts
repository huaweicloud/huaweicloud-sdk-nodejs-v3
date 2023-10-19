import { CreateInstanceOrder } from './CreateInstanceOrder';


export class CreateInstanceOrderRequest {
    public body?: CreateInstanceOrder;
    public constructor() { 
    }
    public withBody(body: CreateInstanceOrder): CreateInstanceOrderRequest {
        this['body'] = body;
        return this;
    }
}