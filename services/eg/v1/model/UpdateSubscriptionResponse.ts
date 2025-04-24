import { SubscriptionSourceInfo } from './SubscriptionSourceInfo';
import { SubscriptionTargetInfo } from './SubscriptionTargetInfo';
import { SubscriptionUsedInfo } from './SubscriptionUsedInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSubscriptionResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public type?: UpdateSubscriptionResponseTypeEnum | string;
    public status?: UpdateSubscriptionResponseStatusEnum | string;
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
    public withId(id: string): UpdateSubscriptionResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateSubscriptionResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateSubscriptionResponse {
        this['description'] = description;
        return this;
    }
    public withType(type: UpdateSubscriptionResponseTypeEnum | string): UpdateSubscriptionResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: UpdateSubscriptionResponseStatusEnum | string): UpdateSubscriptionResponse {
        this['status'] = status;
        return this;
    }
    public withChannelId(channelId: string): UpdateSubscriptionResponse {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withChannelName(channelName: string): UpdateSubscriptionResponse {
        this['channel_name'] = channelName;
        return this;
    }
    public set channelName(channelName: string  | undefined) {
        this['channel_name'] = channelName;
    }
    public get channelName(): string | undefined {
        return this['channel_name'];
    }
    public withUsed(used: Array<SubscriptionUsedInfo>): UpdateSubscriptionResponse {
        this['used'] = used;
        return this;
    }
    public withSources(sources: Array<SubscriptionSourceInfo>): UpdateSubscriptionResponse {
        this['sources'] = sources;
        return this;
    }
    public withTargets(targets: Array<SubscriptionTargetInfo>): UpdateSubscriptionResponse {
        this['targets'] = targets;
        return this;
    }
    public withCreatedTime(createdTime: string): UpdateSubscriptionResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): UpdateSubscriptionResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withXRequestId(xRequestId: string): UpdateSubscriptionResponse {
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
export enum UpdateSubscriptionResponseTypeEnum {
    EVENT = 'EVENT',
    SCHEDULED = 'SCHEDULED'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateSubscriptionResponseStatusEnum {
    CREATED = 'CREATED',
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED',
    FROZEN = 'FROZEN',
    ERROR = 'ERROR'
}
