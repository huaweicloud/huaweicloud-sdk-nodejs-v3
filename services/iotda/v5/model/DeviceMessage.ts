

export class DeviceMessage {
    private 'message_id'?: string | undefined;
    public name?: string;
    public message?: object;
    public encoding?: string;
    private 'payload_format'?: string | undefined;
    public topic?: string;
    public status?: string;
    private 'created_time'?: string | undefined;
    private 'finished_time'?: string | undefined;
    public constructor() { 
    }
    public withMessageId(messageId: string): DeviceMessage {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId() {
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
    public set payloadFormat(payloadFormat: string | undefined) {
        this['payload_format'] = payloadFormat;
    }
    public get payloadFormat() {
        return this['payload_format'];
    }
    public withTopic(topic: string): DeviceMessage {
        this['topic'] = topic;
        return this;
    }
    public withStatus(status: string): DeviceMessage {
        this['status'] = status;
        return this;
    }
    public withCreatedTime(createdTime: string): DeviceMessage {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
    public withFinishedTime(finishedTime: string): DeviceMessage {
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