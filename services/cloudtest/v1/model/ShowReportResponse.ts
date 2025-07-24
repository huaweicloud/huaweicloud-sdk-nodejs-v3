import { ApiError } from './ApiError';
import { ResultValueCustomReportListVo } from './ResultValueCustomReportListVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReportResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueCustomReportListVo;
    public error?: ApiError;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowReportResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueCustomReportListVo): ShowReportResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ShowReportResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): ShowReportResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}