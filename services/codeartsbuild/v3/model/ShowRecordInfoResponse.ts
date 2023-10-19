import { RecordInfoResult } from './RecordInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecordInfoResponse extends SdkResponse {
    public success?: boolean;
    public message?: string;
    private 'err_code'?: string;
    public result?: RecordInfoResult;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ShowRecordInfoResponse {
        this['success'] = success;
        return this;
    }
    public withMessage(message: string): ShowRecordInfoResponse {
        this['message'] = message;
        return this;
    }
    public withErrCode(errCode: string): ShowRecordInfoResponse {
        this['err_code'] = errCode;
        return this;
    }
    public set errCode(errCode: string  | undefined) {
        this['err_code'] = errCode;
    }
    public get errCode(): string | undefined {
        return this['err_code'];
    }
    public withResult(result: RecordInfoResult): ShowRecordInfoResponse {
        this['result'] = result;
        return this;
    }
}