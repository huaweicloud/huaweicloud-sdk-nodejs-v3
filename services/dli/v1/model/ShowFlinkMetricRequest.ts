import { ShowFlinkMetricRequestBody } from './ShowFlinkMetricRequestBody';


export class ShowFlinkMetricRequest {
    public body?: ShowFlinkMetricRequestBody;
    public constructor() { 
    }
    public withBody(body: ShowFlinkMetricRequestBody): ShowFlinkMetricRequest {
        this['body'] = body;
        return this;
    }
}