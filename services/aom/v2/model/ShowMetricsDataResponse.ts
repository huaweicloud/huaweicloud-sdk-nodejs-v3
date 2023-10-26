import { MetricDataValue } from './MetricDataValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMetricsDataResponse extends SdkResponse {
    public errorCode?: string;
    public errorMessage?: string;
    public metrics?: Array<MetricDataValue>;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ShowMetricsDataResponse {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMessage(errorMessage: string): ShowMetricsDataResponse {
        this['errorMessage'] = errorMessage;
        return this;
    }
    public withMetrics(metrics: Array<MetricDataValue>): ShowMetricsDataResponse {
        this['metrics'] = metrics;
        return this;
    }
}