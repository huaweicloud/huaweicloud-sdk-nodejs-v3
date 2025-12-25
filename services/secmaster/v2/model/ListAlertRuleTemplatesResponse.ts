import { AlertRuleTemplate } from './AlertRuleTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlertRuleTemplatesResponse extends SdkResponse {
    public count?: number;
    public records?: Array<AlertRuleTemplate>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAlertRuleTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<AlertRuleTemplate>): ListAlertRuleTemplatesResponse {
        this['records'] = records;
        return this;
    }
}