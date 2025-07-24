import { ApiError } from './ApiError';
import { ResultValueListTaskAssignCaseDetailVo } from './ResultValueListTaskAssignCaseDetailVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskAssignCasesResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListTaskAssignCaseDetailVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListTaskAssignCasesResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListTaskAssignCaseDetailVo): ListTaskAssignCasesResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ListTaskAssignCasesResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): ListTaskAssignCasesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): ListTaskAssignCasesResponse {
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