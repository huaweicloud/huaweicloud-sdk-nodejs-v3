import { ResultValueListCustomReportListVo } from './ResultValueListCustomReportListVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReportsResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListCustomReportListVo;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListReportsResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListCustomReportListVo): ListReportsResponse {
        this['result'] = result;
        return this;
    }
}