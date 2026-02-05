import { AlertRuleTemplateMetric } from './AlertRuleTemplateMetric';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlertRuleTemplateMetricsResponse extends SdkResponse {
    public severity?: AlertRuleTemplateMetric;
    public status?: AlertRuleTemplateMetric;
    public constructor() { 
        super();
    }
    public withSeverity(severity: AlertRuleTemplateMetric): ListAlertRuleTemplateMetricsResponse {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: AlertRuleTemplateMetric): ListAlertRuleTemplateMetricsResponse {
        this['status'] = status;
        return this;
    }
}