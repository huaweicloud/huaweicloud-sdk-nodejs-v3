import { Dimension } from './Dimension';


export class QueryMetricItemOptionParam {
    public dimensions?: Array<Dimension>;
    public metricName?: string;
    public namespace?: QueryMetricItemOptionParamNamespaceEnum | string;
    public constructor(namespace?: string) { 
        this['namespace'] = namespace;
    }
    public withDimensions(dimensions: Array<Dimension>): QueryMetricItemOptionParam {
        this['dimensions'] = dimensions;
        return this;
    }
    public withMetricName(metricName: string): QueryMetricItemOptionParam {
        this['metricName'] = metricName;
        return this;
    }
    public withNamespace(namespace: QueryMetricItemOptionParamNamespaceEnum | string): QueryMetricItemOptionParam {
        this['namespace'] = namespace;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryMetricItemOptionParamNamespaceEnum {
    PAAS_CONTAINER = 'PAAS.CONTAINER',
    PAAS_NODE = 'PAAS.NODE',
    PAAS_SLA = 'PAAS.SLA',
    PAAS_AGGR = 'PAAS.AGGR',
    CUSTOMMETRICS = 'CUSTOMMETRICS'
}
