import { SubscriptionSourceInfo } from './SubscriptionSourceInfo';
import { SubscriptionTargetInfo } from './SubscriptionTargetInfo';
import { SubscriptionUsedInfo } from './SubscriptionUsedInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSubscriptionResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public type?: CreateSubscriptionResponseTypeEnum | string;
    public status?: CreateSubscriptionResponseStatusEnum | string;
    private 'channel_id'?: string;
    private 'channel_name'?: string;
    public used?: Array<SubscriptionUsedInfo>;
    public sources?: Array<SubscriptionSourceInfo>;
    public targets?: Array<SubscriptionTargetInfo>;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateSubscriptionResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateSubscriptionResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateSubscriptionResponse {
        this['description'] = description;
        return this;
    }
    public withType(type: CreateSubscriptionResponseTypeEnum | string): CreateSubscriptionResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: CreateSubscriptionResponseStatusEnum | string): CreateSubscriptionResponse {
        this['status'] = status;
        return this;
    }
    public withChannelId(channelId: string): CreateSubscriptionResponse {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withChannelName(channelName: string): CreateSubscriptionResponse {
        this['channel_name'] = channelName;
        return this;
    }
    public set channelName(channelName: string  | undefined) {
        this['channel_name'] = channelName;
    }
    public get channelName(): string | undefined {
        return this['channel_name'];
    }
    public withUsed(used: Array<SubscriptionUsedInfo>): CreateSubscriptionResponse {
        this['used'] = used;
        return this;
    }
    public withSources(sources: Array<SubscriptionSourceInfo>): CreateSubscriptionResponse {
        this['sources'] = sources;
        return this;
    }
    public withTargets(targets: Array<SubscriptionTargetInfo>): CreateSubscriptionResponse {
        this['targets'] = targets;
        return this;
    }
    public withCreatedTime(createdTime: string): CreateSubscriptionResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): CreateSubscriptionResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withXRequestId(xRequestId: string): CreateSubscriptionResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum CreateSubscriptionResponseTypeEnum {
    EVENT = 'EVENT',
    SCHEDULED = 'SCHEDULED'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSubscriptionResponseStatusEnum {
    CREATED = 'CREATED',
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED',
    FROZEN = 'FROZEN',
    ERROR = 'ERROR'
}
