import { BaseResponse } from './BaseResponse';
import { InstanceStatusStatistics } from './InstanceStatusStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopsStatusResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'encoded_authorization_message'?: string;
    public statics?: Array<InstanceStatusStatistics>;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ListDesktopsStatusResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ListDesktopsStatusResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withEncodedAuthorizationMessage(encodedAuthorizationMessage: string): ListDesktopsStatusResponse {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
        return this;
    }
    public set encodedAuthorizationMessage(encodedAuthorizationMessage: string  | undefined) {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
    }
    public get encodedAuthorizationMessage(): string | undefined {
        return this['encoded_authorization_message'];
    }
    public withStatics(statics: Array<InstanceStatusStatistics>): ListDesktopsStatusResponse {
        this['statics'] = statics;
        return this;
    }
}