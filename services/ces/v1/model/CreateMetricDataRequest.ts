import { CreateMetricDataRequestBody } from './CreateMetricDataRequestBody';


export class CreateMetricDataRequest {
    public body?: Array<CreateMetricDataRequestBody>;
    public constructor() { 
    }
    public withBody(body: Array<CreateMetricDataRequestBody>): CreateMetricDataRequest {
        this['body'] = body;
        return this;
    }
}