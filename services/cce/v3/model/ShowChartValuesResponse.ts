import { ChartValueValues } from './ChartValueValues';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowChartValuesResponse extends SdkResponse {
    public values?: ChartValueValues;
    public constructor() { 
        super();
    }
    public withValues(values: ChartValueValues): ShowChartValuesResponse {
        this['values'] = values;
        return this;
    }
}