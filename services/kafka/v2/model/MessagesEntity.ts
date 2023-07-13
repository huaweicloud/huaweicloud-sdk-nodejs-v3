

export class MessagesEntity {
    public topic?: string;
    public partition?: number;
    public key?: string;
    public value?: string;
    public size?: number;
    public timestamp?: number;
    private 'huge_message'?: boolean | undefined;
    private 'message_offset'?: number | undefined;
    private 'message_id'?: string | undefined;
    private 'app_id'?: string | undefined;
    public tag?: string;
    public constructor() { 
    }
    public withTopic(topic: string): MessagesEntity {
        this['topic'] = topic;
        return this;
    }
    public withPartition(partition: number): MessagesEntity {
        this['partition'] = partition;
        return this;
    }
    public withKey(key: string): MessagesEntity {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): MessagesEntity {
        this['value'] = value;
        return this;
    }
    public withSize(size: number): MessagesEntity {
        this['size'] = size;
        return this;
    }
    public withTimestamp(timestamp: number): MessagesEntity {
        this['timestamp'] = timestamp;
        return this;
    }
    public withHugeMessage(hugeMessage: boolean): MessagesEntity {
        this['huge_message'] = hugeMessage;
        return this;
    }
    public set hugeMessage(hugeMessage: boolean | undefined) {
        this['huge_message'] = hugeMessage;
    }
    public get hugeMessage() {
        return this['huge_message'];
    }
    public withMessageOffset(messageOffset: number): MessagesEntity {
        this['message_offset'] = messageOffset;
        return this;
    }
    public set messageOffset(messageOffset: number | undefined) {
        this['message_offset'] = messageOffset;
    }
    public get messageOffset() {
        return this['message_offset'];
    }
    public withMessageId(messageId: string): MessagesEntity {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId() {
        return this['message_id'];
    }
    public withAppId(appId: string): MessagesEntity {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withTag(tag: string): MessagesEntity {
        this['tag'] = tag;
        return this;
    }
}