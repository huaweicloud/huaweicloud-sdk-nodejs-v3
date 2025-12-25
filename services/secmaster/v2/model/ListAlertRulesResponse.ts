import { AlertRuleItem } from './AlertRuleItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlertRulesResponse extends SdkResponse {
    public count?: number;
    public records?: Array<AlertRuleItem>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAlertRulesResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<AlertRuleItem>): ListAlertRulesResponse {
        this['records'] = records;
        return this;
    }
}