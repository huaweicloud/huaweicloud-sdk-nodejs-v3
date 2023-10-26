import { QueryMetricDataParam } from './QueryMetricDataParam';


export class ShowMetricsDataRequest {
    public fillValue?: ShowMetricsDataRequestFillValueEnum | string;
    public body?: QueryMetricDataParam;
    public constructor() { 
    }
    public withFillValue(fillValue: ShowMetricsDataRequestFillValueEnum | string): ShowMetricsDataRequest {
        this['fillValue'] = fillValue;
        return this;
    }
    public withBody(body: QueryMetricDataParam): ShowMetricsDataRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMetricsDataRequestFillValueEnum {
    E_1 = '-1',
    E_0 = '0',
    NULL = 'null',
    AVERAGE = 'average'
}
