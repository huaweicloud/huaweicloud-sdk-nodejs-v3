import { HotKeyListData } from './HotKeyListData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHotKeysResponse extends SdkResponse {
    public success?: boolean;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public data?: HotKeyListData;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ListHotKeysResponse {
        this['success'] = success;
        return this;
    }
    public withErrorCode(errorCode: string): ListHotKeysResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ListHotKeysResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withData(data: HotKeyListData): ListHotKeysResponse {
        this['data'] = data;
        return this;
    }
}