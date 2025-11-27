import { ApiError } from './ApiError';
import { ResultValueBatchCreateUpdateApiTestCaseVo } from './ResultValueBatchCreateUpdateApiTestCaseVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateTestCasesInDiffVersionResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueBatchCreateUpdateApiTestCaseVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchUpdateTestCasesInDiffVersionResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueBatchCreateUpdateApiTestCaseVo): BatchUpdateTestCasesInDiffVersionResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): BatchUpdateTestCasesInDiffVersionResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): BatchUpdateTestCasesInDiffVersionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): BatchUpdateTestCasesInDiffVersionResponse {
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