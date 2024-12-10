import { ReportData } from './ReportData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainResourceReportsResponse extends SdkResponse {
    public body?: Array<ReportData>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ReportData>): ShowDomainResourceReportsResponse {
        this['body'] = body;
        return this;
    }
}