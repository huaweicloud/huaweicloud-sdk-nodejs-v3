import { OrderReq } from './OrderReq';


export class PayForDgcOneKeyRequest {
    public body?: OrderReq;
    public constructor() { 
    }
    public withBody(body: OrderReq): PayForDgcOneKeyRequest {
        this['body'] = body;
        return this;
    }
}