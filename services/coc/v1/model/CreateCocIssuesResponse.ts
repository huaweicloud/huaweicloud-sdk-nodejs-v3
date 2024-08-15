import { BaseResponse } from './BaseResponse';
import { CreateExternalIssuesResponseData } from './CreateExternalIssuesResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCocIssuesResponse extends SdkResponse {
    private 'provider_code'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public data?: CreateExternalIssuesResponseData;
    public constructor(providerCode?: string, errorCode?: string) { 
        super();
        this['provider_code'] = providerCode;
        this['error_code'] = errorCode;
    }
    public withProviderCode(providerCode: string): CreateCocIssuesResponse {
        this['provider_code'] = providerCode;
        return this;
    }
    public set providerCode(providerCode: string  | undefined) {
        this['provider_code'] = providerCode;
    }
    public get providerCode(): string | undefined {
        return this['provider_code'];
    }
    public withErrorCode(errorCode: string): CreateCocIssuesResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): CreateCocIssuesResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withData(data: CreateExternalIssuesResponseData): CreateCocIssuesResponse {
        this['data'] = data;
        return this;
    }
}