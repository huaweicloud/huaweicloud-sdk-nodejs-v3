import { BasicResponse } from './BasicResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RetryDiagnosisTaskResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): RetryDiagnosisTaskResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): RetryDiagnosisTaskResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withId(id: string): RetryDiagnosisTaskResponse {
        this['id'] = id;
        return this;
    }
}