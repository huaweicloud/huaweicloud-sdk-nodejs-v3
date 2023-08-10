import { MetricDataItem } from './MetricDataItem';


export class CreateMetricDataRequest {
    public body?: Array<MetricDataItem>;
    public constructor() { 
    }
    public withBody(body: Array<MetricDataItem>): CreateMetricDataRequest {
        this['body'] = body;
        return this;
    }
}