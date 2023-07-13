
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPropertiesResponse extends SdkResponse {
    public response?: object;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: object | undefined;
    public constructor() { 
        super();
    }
    public withResponse(response: object): ListPropertiesResponse {
        this['response'] = response;
        return this;
    }
    public withErrorCode(errorCode: string): ListPropertiesResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: object): ListPropertiesResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: object | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}