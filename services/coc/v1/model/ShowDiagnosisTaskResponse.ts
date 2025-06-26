import { BasicResponse } from './BasicResponse';
import { DiagnosisTaskDetail } from './DiagnosisTaskDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiagnosisTaskResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public data?: DiagnosisTaskDetail;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ShowDiagnosisTaskResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ShowDiagnosisTaskResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withData(data: DiagnosisTaskDetail): ShowDiagnosisTaskResponse {
        this['data'] = data;
        return this;
    }
}