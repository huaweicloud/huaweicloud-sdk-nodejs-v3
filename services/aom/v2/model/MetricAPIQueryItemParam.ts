import { QueryMetricItemOptionParam } from './QueryMetricItemOptionParam';


export class MetricAPIQueryItemParam {
    public inventoryId?: string;
    public metricItems?: Array<QueryMetricItemOptionParam>;
    public constructor() { 
    }
    public withInventoryId(inventoryId: string): MetricAPIQueryItemParam {
        this['inventoryId'] = inventoryId;
        return this;
    }
    public withMetricItems(metricItems: Array<QueryMetricItemOptionParam>): MetricAPIQueryItemParam {
        this['metricItems'] = metricItems;
        return this;
    }
}