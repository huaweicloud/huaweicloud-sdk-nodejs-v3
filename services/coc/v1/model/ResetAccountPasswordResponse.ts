import { AccountBaseResponse } from './AccountBaseResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetAccountPasswordResponse extends SdkResponse {
    private 'provider_code'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public data?: string;
    public constructor(providerCode?: string, errorCode?: string) { 
        super();
        this['provider_code'] = providerCode;
        this['error_code'] = errorCode;
    }
    public withProviderCode(providerCode: string): ResetAccountPasswordResponse {
        this['provider_code'] = providerCode;
        return this;
    }
    public set providerCode(providerCode: string  | undefined) {
        this['provider_code'] = providerCode;
    }
    public get providerCode(): string | undefined {
        return this['provider_code'];
    }
    public withErrorCode(errorCode: string): ResetAccountPasswordResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ResetAccountPasswordResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withData(data: string): ResetAccountPasswordResponse {
        this['data'] = data;
        return this;
    }
}