
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCloudPhoneSingleServerResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'order_id'?: string;
    private 'product_id'?: string;
    private 'server_ids'?: Array<string>;
    private 'error_msg'?: string;
    private 'error_code'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateCloudPhoneSingleServerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withOrderId(orderId: string): CreateCloudPhoneSingleServerResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withProductId(productId: string): CreateCloudPhoneSingleServerResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withServerIds(serverIds: Array<string>): CreateCloudPhoneSingleServerResponse {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
    public withErrorMsg(errorMsg: string): CreateCloudPhoneSingleServerResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorCode(errorCode: string): CreateCloudPhoneSingleServerResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}