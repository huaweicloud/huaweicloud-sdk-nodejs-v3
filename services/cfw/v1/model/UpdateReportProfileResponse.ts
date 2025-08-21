import { ReportProfileRespData } from './ReportProfileRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateReportProfileResponse extends SdkResponse {
    public data?: ReportProfileRespData;
    public constructor() { 
        super();
    }
    public withData(data: ReportProfileRespData): UpdateReportProfileResponse {
        this['data'] = data;
        return this;
    }
}