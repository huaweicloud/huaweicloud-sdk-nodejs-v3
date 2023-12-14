
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPropertiesResponse extends SdkResponse {
    private 'request_id'?: string;
    public response?: object;
    private 'error_code'?: string;
    private 'error_msg'?: object;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListPropertiesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withResponse(response: object): ListPropertiesResponse {
        this['response'] = response;
        return this;
    }
    public withErrorCode(errorCode: string): ListPropertiesResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: object): ListPropertiesResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: object  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): object | undefined {
        return this['error_msg'];
    }
}