import { ListAlertRuleTemplateMetricsResponseBodySeverity } from './ListAlertRuleTemplateMetricsResponseBodySeverity';
import { ListAlertRuleTemplateMetricsResponseBodyStatus } from './ListAlertRuleTemplateMetricsResponseBodyStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlertRuleTemplateMetricsResponse extends SdkResponse {
    public severity?: ListAlertRuleTemplateMetricsResponseBodySeverity;
    public status?: ListAlertRuleTemplateMetricsResponseBodyStatus;
    public constructor() { 
        super();
    }
    public withSeverity(severity: ListAlertRuleTemplateMetricsResponseBodySeverity): ListAlertRuleTemplateMetricsResponse {
        this['severity'] = severity;
        return this;
    }
    public withStatus(status: ListAlertRuleTemplateMetricsResponseBodyStatus): ListAlertRuleTemplateMetricsResponse {
        this['status'] = status;
        return this;
    }
}