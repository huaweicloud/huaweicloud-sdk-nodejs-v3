import { CreateInstancePeriodRequest } from './CreateInstancePeriodRequest';


export class CreateInstancesPeriodOrderRequest {
    public body?: CreateInstancePeriodRequest;
    public constructor() { 
    }
    public withBody(body: CreateInstancePeriodRequest): CreateInstancesPeriodOrderRequest {
        this['body'] = body;
        return this;
    }
}