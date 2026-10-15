import { BigKeyListData } from './BigKeyListData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBigKeysResponse extends SdkResponse {
    public success?: boolean;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public data?: BigKeyListData;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ListBigKeysResponse {
        this['success'] = success;
        return this;
    }
    public withErrorCode(errorCode: string): ListBigKeysResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ListBigKeysResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withData(data: BigKeyListData): ListBigKeysResponse {
        this['data'] = data;
        return this;
    }
}