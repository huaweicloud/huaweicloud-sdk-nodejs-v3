import { BasicResponse } from './BasicResponse';
import { DiagnosisTaskPage } from './DiagnosisTaskPage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDiagnosisTasksResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public data?: DiagnosisTaskPage;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ListDiagnosisTasksResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ListDiagnosisTasksResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withData(data: DiagnosisTaskPage): ListDiagnosisTasksResponse {
        this['data'] = data;
        return this;
    }
}