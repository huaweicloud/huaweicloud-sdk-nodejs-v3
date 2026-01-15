import { BaseResponse } from './BaseResponse';


export class MonitorUserOnlineInfo {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'error_detail'?: string;
    private 'encoded_authorization_message'?: string;
    private 'connection_setup_time'?: string;
    private 'connection_end_time'?: string;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): MonitorUserOnlineInfo {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): MonitorUserOnlineInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorDetail(errorDetail: string): MonitorUserOnlineInfo {
        this['error_detail'] = errorDetail;
        return this;
    }
    public set errorDetail(errorDetail: string  | undefined) {
        this['error_detail'] = errorDetail;
    }
    public get errorDetail(): string | undefined {
        return this['error_detail'];
    }
    public withEncodedAuthorizationMessage(encodedAuthorizationMessage: string): MonitorUserOnlineInfo {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
        return this;
    }
    public set encodedAuthorizationMessage(encodedAuthorizationMessage: string  | undefined) {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
    }
    public get encodedAuthorizationMessage(): string | undefined {
        return this['encoded_authorization_message'];
    }
    public withConnectionSetupTime(connectionSetupTime: string): MonitorUserOnlineInfo {
        this['connection_setup_time'] = connectionSetupTime;
        return this;
    }
    public set connectionSetupTime(connectionSetupTime: string  | undefined) {
        this['connection_setup_time'] = connectionSetupTime;
    }
    public get connectionSetupTime(): string | undefined {
        return this['connection_setup_time'];
    }
    public withConnectionEndTime(connectionEndTime: string): MonitorUserOnlineInfo {
        this['connection_end_time'] = connectionEndTime;
        return this;
    }
    public set connectionEndTime(connectionEndTime: string  | undefined) {
        this['connection_end_time'] = connectionEndTime;
    }
    public get connectionEndTime(): string | undefined {
        return this['connection_end_time'];
    }
}