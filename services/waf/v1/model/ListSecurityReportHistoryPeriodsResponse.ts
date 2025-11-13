import { ListSecurityReportHistoryPeriodResponseItems } from './ListSecurityReportHistoryPeriodResponseItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityReportHistoryPeriodsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ListSecurityReportHistoryPeriodResponseItems>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityReportHistoryPeriodsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ListSecurityReportHistoryPeriodResponseItems>): ListSecurityReportHistoryPeriodsResponse {
        this['items'] = items;
        return this;
    }
}