import { CreatePeriodElasticResourcePoolSpecChangeOrderRequestBody } from './CreatePeriodElasticResourcePoolSpecChangeOrderRequestBody';


export class CreatePeriodElasticResourcePoolSpecChangeOrderRequest {
    public body?: CreatePeriodElasticResourcePoolSpecChangeOrderRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePeriodElasticResourcePoolSpecChangeOrderRequestBody): CreatePeriodElasticResourcePoolSpecChangeOrderRequest {
        this['body'] = body;
        return this;
    }
}