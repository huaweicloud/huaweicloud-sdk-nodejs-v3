import { MetricAPIQueryItemParam } from './MetricAPIQueryItemParam';


export class ListMetricItemsRequest {
    public type?: string;
    public limit?: string;
    public start?: string;
    public body?: MetricAPIQueryItemParam;
    public constructor() { 
    }
    public withType(type: string): ListMetricItemsRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: string): ListMetricItemsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStart(start: string): ListMetricItemsRequest {
        this['start'] = start;
        return this;
    }
    public withBody(body: MetricAPIQueryItemParam): ListMetricItemsRequest {
        this['body'] = body;
        return this;
    }
}