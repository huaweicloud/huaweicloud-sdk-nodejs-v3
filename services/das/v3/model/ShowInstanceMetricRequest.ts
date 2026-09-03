import { ShowInstanceMetricRequestBody } from './ShowInstanceMetricRequestBody';


export class ShowInstanceMetricRequest {
    public body?: ShowInstanceMetricRequestBody;
    public constructor() { 
    }
    public withBody(body: ShowInstanceMetricRequestBody): ShowInstanceMetricRequest {
        this['body'] = body;
        return this;
    }
}