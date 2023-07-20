import { ImportErrorMessageResp } from './ImportErrorMessageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportBatchCreateJobsResponse extends SdkResponse {
    private 'async_job_id'?: string;
    private 'import_error_messages'?: Array<ImportErrorMessageResp>;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withAsyncJobId(asyncJobId: string): ImportBatchCreateJobsResponse {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string  | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId(): string | undefined {
        return this['async_job_id'];
    }
    public withImportErrorMessages(importErrorMessages: Array<ImportErrorMessageResp>): ImportBatchCreateJobsResponse {
        this['import_error_messages'] = importErrorMessages;
        return this;
    }
    public set importErrorMessages(importErrorMessages: Array<ImportErrorMessageResp>  | undefined) {
        this['import_error_messages'] = importErrorMessages;
    }
    public get importErrorMessages(): Array<ImportErrorMessageResp> | undefined {
        return this['import_error_messages'];
    }
    public withErrorCode(errorCode: string): ImportBatchCreateJobsResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ImportBatchCreateJobsResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}