import { FirewallReport } from './FirewallReport';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFirewallReportResponse extends SdkResponse {
    public data?: FirewallReport;
    public constructor() { 
        super();
    }
    public withData(data: FirewallReport): ShowFirewallReportResponse {
        this['data'] = data;
        return this;
    }
}