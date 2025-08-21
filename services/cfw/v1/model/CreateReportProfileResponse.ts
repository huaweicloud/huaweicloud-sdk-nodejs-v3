import { ReportProfileRespData } from './ReportProfileRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateReportProfileResponse extends SdkResponse {
    public data?: ReportProfileRespData;
    public constructor() { 
        super();
    }
    public withData(data: ReportProfileRespData): CreateReportProfileResponse {
        this['data'] = data;
        return this;
    }
}