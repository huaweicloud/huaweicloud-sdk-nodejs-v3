import { ReportInfo } from './ReportInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditReportsResponse extends SdkResponse {
    public reports?: Array<ReportInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withReports(reports: Array<ReportInfo>): ListAuditReportsResponse {
        this['reports'] = reports;
        return this;
    }
    public withTotal(total: number): ListAuditReportsResponse {
        this['total'] = total;
        return this;
    }
}