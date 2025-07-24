import { ApiError } from './ApiError';
import { ResultValueListTestCaseCommentVo } from './ResultValueListTestCaseCommentVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTestCaseCommentsResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListTestCaseCommentVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListTestCaseCommentsResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListTestCaseCommentVo): ListTestCaseCommentsResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ListTestCaseCommentsResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): ListTestCaseCommentsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): ListTestCaseCommentsResponse {
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