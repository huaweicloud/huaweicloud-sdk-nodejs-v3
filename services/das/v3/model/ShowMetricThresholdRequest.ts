import { ShowMetricThresholdRequestBody } from './ShowMetricThresholdRequestBody';


export class ShowMetricThresholdRequest {
    public body?: ShowMetricThresholdRequestBody;
    public constructor() { 
    }
    public withBody(body: ShowMetricThresholdRequestBody): ShowMetricThresholdRequest {
        this['body'] = body;
        return this;
    }
}