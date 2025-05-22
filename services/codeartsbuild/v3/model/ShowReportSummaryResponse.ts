import { ShowReportSummaryBodyResult } from './ShowReportSummaryBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReportSummaryResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: ShowReportSummaryBodyResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowReportSummaryResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): ShowReportSummaryResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: ShowReportSummaryBodyResult): ShowReportSummaryResponse {
        this['result'] = result;
        return this;
    }
}