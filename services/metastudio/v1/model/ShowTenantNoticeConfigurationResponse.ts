
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantNoticeConfigurationResponse extends SdkResponse {
    public type?: string;
    private 'send_msg'?: boolean;
    public properties?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withType(type: string): ShowTenantNoticeConfigurationResponse {
        this['type'] = type;
        return this;
    }
    public withSendMsg(sendMsg: boolean): ShowTenantNoticeConfigurationResponse {
        this['send_msg'] = sendMsg;
        return this;
    }
    public set sendMsg(sendMsg: boolean  | undefined) {
        this['send_msg'] = sendMsg;
    }
    public get sendMsg(): boolean | undefined {
        return this['send_msg'];
    }
    public withProperties(properties: string): ShowTenantNoticeConfigurationResponse {
        this['properties'] = properties;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowTenantNoticeConfigurationResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}