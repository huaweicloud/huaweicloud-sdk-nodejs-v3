import { CreateInstancePeriodRequest } from './CreateInstancePeriodRequest';


export class CreateInstancesPeriodOrderNewRequest {
    public body?: CreateInstancePeriodRequest;
    public constructor() { 
    }
    public withBody(body: CreateInstancePeriodRequest): CreateInstancesPeriodOrderNewRequest {
        this['body'] = body;
        return this;
    }
}