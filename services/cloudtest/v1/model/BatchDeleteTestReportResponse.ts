import { ResultValueStringForOk } from './ResultValueStringForOk';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteTestReportResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueStringForOk;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchDeleteTestReportResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueStringForOk): BatchDeleteTestReportResponse {
        this['result'] = result;
        return this;
    }
}