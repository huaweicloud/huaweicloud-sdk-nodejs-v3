import { AlertRuleTemplateMetric } from './AlertRuleTemplateMetric';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlertRuleTemplateMetricsResponse extends SdkResponse {
    public body?: { [key: string]: AlertRuleTemplateMetric; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: AlertRuleTemplateMetric; }): ListAlertRuleTemplateMetricsResponse {
        this['body'] = body;
        return this;
    }
}