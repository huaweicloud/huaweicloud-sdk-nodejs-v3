import { SecurityReportSubscriptionSummaryResponse } from './SecurityReportSubscriptionSummaryResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityReportSubscriptionsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<SecurityReportSubscriptionSummaryResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityReportSubscriptionsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<SecurityReportSubscriptionSummaryResponse>): ListSecurityReportSubscriptionsResponse {
        this['items'] = items;
        return this;
    }
}