import { ChargeOrderDbssNew } from './ChargeOrderDbssNew';


export class CreateDbOmInstancePeriodRequest {
    public body?: ChargeOrderDbssNew;
    public constructor() { 
    }
    public withBody(body: ChargeOrderDbssNew): CreateDbOmInstancePeriodRequest {
        this['body'] = body;
        return this;
    }
}