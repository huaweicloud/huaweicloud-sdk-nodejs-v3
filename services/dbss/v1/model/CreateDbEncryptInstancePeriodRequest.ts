import { ChargeOrderDbssNew } from './ChargeOrderDbssNew';


export class CreateDbEncryptInstancePeriodRequest {
    public body?: ChargeOrderDbssNew;
    public constructor() { 
    }
    public withBody(body: ChargeOrderDbssNew): CreateDbEncryptInstancePeriodRequest {
        this['body'] = body;
        return this;
    }
}