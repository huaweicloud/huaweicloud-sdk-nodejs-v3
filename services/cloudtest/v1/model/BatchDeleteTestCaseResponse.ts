import { ErrorDetailInfo } from './ErrorDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteTestCaseResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'error_detail'?: ErrorDetailInfo;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): BatchDeleteTestCaseResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): BatchDeleteTestCaseResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorDetail(errorDetail: ErrorDetailInfo): BatchDeleteTestCaseResponse {
        this['error_detail'] = errorDetail;
        return this;
    }
    public set errorDetail(errorDetail: ErrorDetailInfo  | undefined) {
        this['error_detail'] = errorDetail;
    }
    public get errorDetail(): ErrorDetailInfo | undefined {
        return this['error_detail'];
    }
}