import { ErrorInfoDTO } from './ErrorInfoDTO';
import { PropertiesDTO } from './PropertiesDTO';


export class DeviceMessage {
    private 'message_id'?: string;
    public name?: string;
    public message?: object;
    public encoding?: string;
    private 'payload_format'?: string;
    public topic?: string;
    public properties?: PropertiesDTO;
    public status?: string;
    private 'error_info'?: ErrorInfoDTO;
    private 'created_time'?: string;
    private 'finished_time'?: string;
    public constructor() { 
    }
    public withMessageId(messageId: string): DeviceMessage {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
    public withName(name: string): DeviceMessage {
        this['name'] = name;
        return this;
    }
    public withMessage(message: object): DeviceMessage {
        this['message'] = message;
        return this;
    }
    public withEncoding(encoding: string): DeviceMessage {
        this['encoding'] = encoding;
        return this;
    }
    public withPayloadFormat(payloadFormat: string): DeviceMessage {
        this['payload_format'] = payloadFormat;
        return this;
    }
    public set payloadFormat(payloadFormat: string  | undefined) {
        this['payload_format'] = payloadFormat;
    }
    public get payloadFormat(): string | undefined {
        return this['payload_format'];
    }
    public withTopic(topic: string): DeviceMessage {
        this['topic'] = topic;
        return this;
    }
    public withProperties(properties: PropertiesDTO): DeviceMessage {
        this['properties'] = properties;
        return this;
    }
    public withStatus(status: string): DeviceMessage {
        this['status'] = status;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorInfoDTO): DeviceMessage {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfoDTO  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorInfoDTO | undefined {
        return this['error_info'];
    }
    public withCreatedTime(createdTime: string): DeviceMessage {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withFinishedTime(finishedTime: string): DeviceMessage {
        this['finished_time'] = finishedTime;
        return this;
    }
    public set finishedTime(finishedTime: string  | undefined) {
        this['finished_time'] = finishedTime;
    }
    public get finishedTime(): string | undefined {
        return this['finished_time'];
    }
}