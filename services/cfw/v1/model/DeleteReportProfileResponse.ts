import { ReportProfileRespData } from './ReportProfileRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteReportProfileResponse extends SdkResponse {
    public data?: ReportProfileRespData;
    public constructor() { 
        super();
    }
    public withData(data: ReportProfileRespData): DeleteReportProfileResponse {
        this['data'] = data;
        return this;
    }
}