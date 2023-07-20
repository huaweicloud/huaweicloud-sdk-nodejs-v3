
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BroadcastMessageResponse extends SdkResponse {
    private 'app_id'?: string;
    private 'topic_full_name'?: string;
    private 'message_id'?: string;
    private 'created_time'?: string;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): BroadcastMessageResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withTopicFullName(topicFullName: string): BroadcastMessageResponse {
        this['topic_full_name'] = topicFullName;
        return this;
    }
    public set topicFullName(topicFullName: string  | undefined) {
        this['topic_full_name'] = topicFullName;
    }
    public get topicFullName(): string | undefined {
        return this['topic_full_name'];
    }
    public withMessageId(messageId: string): BroadcastMessageResponse {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
    public withCreatedTime(createdTime: string): BroadcastMessageResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
}