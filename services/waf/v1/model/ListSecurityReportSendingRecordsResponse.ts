import { ListSecurityReportSendingRecordResponseItems } from './ListSecurityReportSendingRecordResponseItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityReportSendingRecordsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<ListSecurityReportSendingRecordResponseItems>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityReportSendingRecordsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<ListSecurityReportSendingRecordResponseItems>): ListSecurityReportSendingRecordsResponse {
        this['items'] = items;
        return this;
    }
}