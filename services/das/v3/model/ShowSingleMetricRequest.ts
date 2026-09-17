import { ShowSingleMetricRequestBody } from './ShowSingleMetricRequestBody';


export class ShowSingleMetricRequest {
    public body?: ShowSingleMetricRequestBody;
    public constructor() { 
    }
    public withBody(body: ShowSingleMetricRequestBody): ShowSingleMetricRequest {
        this['body'] = body;
        return this;
    }
}