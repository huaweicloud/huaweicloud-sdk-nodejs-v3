import { SubscriptionSourceInfo } from './SubscriptionSourceInfo';
import { SubscriptionTargetInfo } from './SubscriptionTargetInfo';
import { SubscriptionUsedInfo } from './SubscriptionUsedInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailOfSubscriptionResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public type?: ShowDetailOfSubscriptionResponseTypeEnum | string;
    public status?: ShowDetailOfSubscriptionResponseStatusEnum | string;
    private 'channel_id'?: string;
    private 'channel_name'?: string;
    public used?: Array<SubscriptionUsedInfo>;
    public sources?: Array<SubscriptionSourceInfo>;
    public targets?: Array<SubscriptionTargetInfo>;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDetailOfSubscriptionResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowDetailOfSubscriptionResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowDetailOfSubscriptionResponse {
        this['description'] = description;
        return this;
    }
    public withType(type: ShowDetailOfSubscriptionResponseTypeEnum | string): ShowDetailOfSubscriptionResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: ShowDetailOfSubscriptionResponseStatusEnum | string): ShowDetailOfSubscriptionResponse {
        this['status'] = status;
        return this;
    }
    public withChannelId(channelId: string): ShowDetailOfSubscriptionResponse {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withChannelName(channelName: string): ShowDetailOfSubscriptionResponse {
        this['channel_name'] = channelName;
        return this;
    }
    public set channelName(channelName: string  | undefined) {
        this['channel_name'] = channelName;
    }
    public get channelName(): string | undefined {
        return this['channel_name'];
    }
    public withUsed(used: Array<SubscriptionUsedInfo>): ShowDetailOfSubscriptionResponse {
        this['used'] = used;
        return this;
    }
    public withSources(sources: Array<SubscriptionSourceInfo>): ShowDetailOfSubscriptionResponse {
        this['sources'] = sources;
        return this;
    }
    public withTargets(targets: Array<SubscriptionTargetInfo>): ShowDetailOfSubscriptionResponse {
        this['targets'] = targets;
        return this;
    }
    public withCreatedTime(createdTime: string): ShowDetailOfSubscriptionResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): ShowDetailOfSubscriptionResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDetailOfSubscriptionResponseTypeEnum {
    EVENT = 'EVENT',
    SCHEDULED = 'SCHEDULED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDetailOfSubscriptionResponseStatusEnum {
    CREATED = 'CREATED',
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED',
    FROZEN = 'FROZEN',
    ERROR = 'ERROR'
}
