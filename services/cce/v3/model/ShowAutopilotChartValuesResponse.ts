import { ChartValueValues } from './ChartValueValues';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutopilotChartValuesResponse extends SdkResponse {
    public values?: ChartValueValues;
    public constructor() { 
        super();
    }
    public withValues(values: ChartValueValues): ShowAutopilotChartValuesResponse {
        this['values'] = values;
        return this;
    }
}