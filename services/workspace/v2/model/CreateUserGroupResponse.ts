
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUserGroupResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'encoded_authorization_message'?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): CreateUserGroupResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): CreateUserGroupResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withEncodedAuthorizationMessage(encodedAuthorizationMessage: string): CreateUserGroupResponse {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
        return this;
    }
    public set encodedAuthorizationMessage(encodedAuthorizationMessage: string  | undefined) {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
    }
    public get encodedAuthorizationMessage(): string | undefined {
        return this['encoded_authorization_message'];
    }
}