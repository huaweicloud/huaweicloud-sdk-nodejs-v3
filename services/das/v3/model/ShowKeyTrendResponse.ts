import { KeyTrendData } from './KeyTrendData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKeyTrendResponse extends SdkResponse {
    public success?: boolean;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public data?: KeyTrendData;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ShowKeyTrendResponse {
        this['success'] = success;
        return this;
    }
    public withErrorCode(errorCode: string): ShowKeyTrendResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ShowKeyTrendResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withData(data: KeyTrendData): ShowKeyTrendResponse {
        this['data'] = data;
        return this;
    }
}