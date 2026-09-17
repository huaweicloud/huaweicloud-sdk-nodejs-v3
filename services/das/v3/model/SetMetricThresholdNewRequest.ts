import { SetMetricThresholdNewRequestBody } from './SetMetricThresholdNewRequestBody';


export class SetMetricThresholdNewRequest {
    public body?: SetMetricThresholdNewRequestBody;
    public constructor() { 
    }
    public withBody(body: SetMetricThresholdNewRequestBody): SetMetricThresholdNewRequest {
        this['body'] = body;
        return this;
    }
}