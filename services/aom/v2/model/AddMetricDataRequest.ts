import { MetricDataItem } from './MetricDataItem';


export class AddMetricDataRequest {
    public body?: Array<MetricDataItem>;
    public constructor() { 
    }
    public withBody(body: Array<MetricDataItem>): AddMetricDataRequest {
        this['body'] = body;
        return this;
    }
}