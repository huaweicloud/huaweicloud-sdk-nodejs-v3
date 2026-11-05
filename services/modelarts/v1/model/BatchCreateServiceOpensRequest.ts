import { ServiceBatchOpenRequest } from './ServiceBatchOpenRequest';


export class BatchCreateServiceOpensRequest {
    public body?: ServiceBatchOpenRequest;
    public constructor() { 
    }
    public withBody(body: ServiceBatchOpenRequest): BatchCreateServiceOpensRequest {
        this['body'] = body;
        return this;
    }
}