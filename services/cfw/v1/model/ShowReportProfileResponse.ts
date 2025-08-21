import { ReportProfileInfoVO } from './ReportProfileInfoVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReportProfileResponse extends SdkResponse {
    public data?: ReportProfileInfoVO;
    public constructor() { 
        super();
    }
    public withData(data: ReportProfileInfoVO): ShowReportProfileResponse {
        this['data'] = data;
        return this;
    }
}