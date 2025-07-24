import { ApiError } from './ApiError';
import { ResultValueListTestReportVo } from './ResultValueListTestReportVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTestReportsByConditionResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListTestReportVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListTestReportsByConditionResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListTestReportVo): ListTestReportsByConditionResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ListTestReportsByConditionResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): ListTestReportsByConditionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): ListTestReportsByConditionResponse {
        this['server_address'] = serverAddress;
        return this;
    }
    public set serverAddress(serverAddress: string  | undefined) {
        this['server_address'] = serverAddress;
    }
    public get serverAddress(): string | undefined {
        return this['server_address'];
    }
}