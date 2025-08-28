import { SupportMetricNameListSupportMetricNames } from './SupportMetricNameListSupportMetricNames';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMetricNamesSupportResponse extends SdkResponse {
    private 'support_metric_names'?: Array<SupportMetricNameListSupportMetricNames>;
    public constructor() { 
        super();
    }
    public withSupportMetricNames(supportMetricNames: Array<SupportMetricNameListSupportMetricNames>): ShowMetricNamesSupportResponse {
        this['support_metric_names'] = supportMetricNames;
        return this;
    }
    public set supportMetricNames(supportMetricNames: Array<SupportMetricNameListSupportMetricNames>  | undefined) {
        this['support_metric_names'] = supportMetricNames;
    }
    public get supportMetricNames(): Array<SupportMetricNameListSupportMetricNames> | undefined {
        return this['support_metric_names'];
    }
}