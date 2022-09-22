import { ErrorInfoDTO } from './ErrorInfoDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeviceMessageResponse extends SdkResponse {
    private 'message_id'?: string | undefined;
    public name?: string;
    public message?: object;
    public encoding?: string;
    private 'payload_format'?: string | undefined;
    public topic?: string;
    public status?: string;
    private 'error_info'?: ErrorInfoDTO | undefined;
    private 'created_time'?: string | undefined;
    private 'finished_time'?: string | undefined;
    public constructor() { 
        super();
    }
    public withMessageId(messageId: string): ShowDeviceMessageResponse {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId() {
        return this['message_id'];
    }
    public withName(name: string): ShowDeviceMessageResponse {
        this['name'] = name;
        return this;
    }
    public withMessage(message: object): ShowDeviceMessageResponse {
        this['message'] = message;
        return this;
    }
    public withEncoding(encoding: string): ShowDeviceMessageResponse {
        this['encoding'] = encoding;
        return this;
    }
    public withPayloadFormat(payloadFormat: string): ShowDeviceMessageResponse {
        this['payload_format'] = payloadFormat;
        return this;
    }
    public set payloadFormat(payloadFormat: string | undefined) {
        this['payload_format'] = payloadFormat;
    }
    public get payloadFormat() {
        return this['payload_format'];
    }
    public withTopic(topic: string): ShowDeviceMessageResponse {
        this['topic'] = topic;
        return this;
    }
    public withStatus(status: string): ShowDeviceMessageResponse {
        this['status'] = status;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorInfoDTO): ShowDeviceMessageResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfoDTO | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo() {
        return this['error_info'];
    }
    public withCreatedTime(createdTime: string): ShowDeviceMessageResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
    public withFinishedTime(finishedTime: string): ShowDeviceMessageResponse {
        this['finished_time'] = finishedTime;
        return this;
    }
    public set finishedTime(finishedTime: string | undefined) {
        this['finished_time'] = finishedTime;
    }
    public get finishedTime() {
        return this['finished_time'];
    }
}