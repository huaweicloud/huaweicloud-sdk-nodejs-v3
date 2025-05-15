import { BaseResponse } from './BaseResponse';
import { CocIssuesTicketDetailInfoResponseData } from './CocIssuesTicketDetailInfoResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCocIssuesDetailResponse extends SdkResponse {
    private 'provider_code'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public data?: CocIssuesTicketDetailInfoResponseData;
    public constructor(providerCode?: string, errorCode?: string, errorMsg?: string, data?: CocIssuesTicketDetailInfoResponseData) { 
        super();
        this['provider_code'] = providerCode;
        this['error_code'] = errorCode;
        this['error_msg'] = errorMsg;
        this['data'] = data;
    }
    public withProviderCode(providerCode: string): ShowCocIssuesDetailResponse {
        this['provider_code'] = providerCode;
        return this;
    }
    public set providerCode(providerCode: string  | undefined) {
        this['provider_code'] = providerCode;
    }
    public get providerCode(): string | undefined {
        return this['provider_code'];
    }
    public withErrorCode(errorCode: string): ShowCocIssuesDetailResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ShowCocIssuesDetailResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withData(data: CocIssuesTicketDetailInfoResponseData): ShowCocIssuesDetailResponse {
        this['data'] = data;
        return this;
    }
}