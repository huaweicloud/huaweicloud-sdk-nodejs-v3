import { ApiError } from './ApiError';
import { ResultValueTestCaseCommentVo } from './ResultValueTestCaseCommentVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTestCaseCommentResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueTestCaseCommentVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateTestCaseCommentResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueTestCaseCommentVo): UpdateTestCaseCommentResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): UpdateTestCaseCommentResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): UpdateTestCaseCommentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): UpdateTestCaseCommentResponse {
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