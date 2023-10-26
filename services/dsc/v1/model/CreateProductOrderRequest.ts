import { PeriodOrderRequest } from './PeriodOrderRequest';


export class CreateProductOrderRequest {
    public body?: PeriodOrderRequest;
    public constructor() { 
    }
    public withBody(body: PeriodOrderRequest): CreateProductOrderRequest {
        this['body'] = body;
        return this;
    }
}