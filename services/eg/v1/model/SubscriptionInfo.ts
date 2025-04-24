import { SubscriptionSourceInfo } from './SubscriptionSourceInfo';
import { SubscriptionTargetInfo } from './SubscriptionTargetInfo';
import { SubscriptionUsedInfo } from './SubscriptionUsedInfo';


export class SubscriptionInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    public type?: SubscriptionInfoTypeEnum | string;
    public status?: SubscriptionInfoStatusEnum | string;
    private 'channel_id'?: string;
    private 'channel_name'?: string;
    public used?: Array<SubscriptionUsedInfo>;
    public sources?: Array<SubscriptionSourceInfo>;
    public targets?: Array<SubscriptionTargetInfo>;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public constructor() { 
    }
    public withId(id: string): SubscriptionInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SubscriptionInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SubscriptionInfo {
        this['description'] = description;
        return this;
    }
    public withType(type: SubscriptionInfoTypeEnum | string): SubscriptionInfo {
        this['type'] = type;
        return this;
    }
    public withStatus(status: SubscriptionInfoStatusEnum | string): SubscriptionInfo {
        this['status'] = status;
        return this;
    }
    public withChannelId(channelId: string): SubscriptionInfo {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withChannelName(channelName: string): SubscriptionInfo {
        this['channel_name'] = channelName;
        return this;
    }
    public set channelName(channelName: string  | undefined) {
        this['channel_name'] = channelName;
    }
    public get channelName(): string | undefined {
        return this['channel_name'];
    }
    public withUsed(used: Array<SubscriptionUsedInfo>): SubscriptionInfo {
        this['used'] = used;
        return this;
    }
    public withSources(sources: Array<SubscriptionSourceInfo>): SubscriptionInfo {
        this['sources'] = sources;
        return this;
    }
    public withTargets(targets: Array<SubscriptionTargetInfo>): SubscriptionInfo {
        this['targets'] = targets;
        return this;
    }
    public withCreatedTime(createdTime: string): SubscriptionInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): SubscriptionInfo {
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
export enum SubscriptionInfoTypeEnum {
    EVENT = 'EVENT',
    SCHEDULED = 'SCHEDULED'
}
/**
    * @export
    * @enum {string}
    */
export enum SubscriptionInfoStatusEnum {
    CREATED = 'CREATED',
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED',
    FROZEN = 'FROZEN',
    ERROR = 'ERROR'
}
