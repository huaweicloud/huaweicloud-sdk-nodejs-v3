
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpcResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'error_msg'?: string | undefined;
    private 'error_code'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateVpcResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withErrorMsg(errorMsg: string): CreateVpcResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
    public withErrorCode(errorCode: string): CreateVpcResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
}