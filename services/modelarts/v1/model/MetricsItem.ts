import { MetricTableItem } from './MetricTableItem';
import { ResourceMetricsMetadata } from './ResourceMetricsMetadata';


export class MetricsItem {
    public table?: MetricTableItem;
    public metadata?: ResourceMetricsMetadata;
    public constructor() { 
    }
    public withTable(table: MetricTableItem): MetricsItem {
        this['table'] = table;
        return this;
    }
    public withMetadata(metadata: ResourceMetricsMetadata): MetricsItem {
        this['metadata'] = metadata;
        return this;
    }
}