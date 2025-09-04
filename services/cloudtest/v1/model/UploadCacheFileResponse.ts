import { ApiError } from './ApiError';
import { ResultValueAttachmentFileVo } from './ResultValueAttachmentFileVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadCacheFileResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueAttachmentFileVo;
    public error?: ApiError;
    private 'request_id'?: string;
    private 'server_address'?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UploadCacheFileResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueAttachmentFileVo): UploadCacheFileResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): UploadCacheFileResponse {
        this['error'] = error;
        return this;
    }
    public withRequestId(requestId: string): UploadCacheFileResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerAddress(serverAddress: string): UploadCacheFileResponse {
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