import { CustomizeSourceInfoEventTypes } from './CustomizeSourceInfoEventTypes';
import { ErrorInfo } from './ErrorInfo';


export class CustomizeSourceInfo {
    public id?: string;
    public name?: string;
    public label?: string;
    public description?: string;
    private 'provider_type'?: CustomizeSourceInfoProviderTypeEnum | string;
    private 'event_types'?: Array<CustomizeSourceInfoEventTypes>;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    private 'channel_id'?: string;
    private 'channel_name'?: string;
    public type?: string;
    public detail?: object;
    public status?: CustomizeSourceInfoStatusEnum | string;
    private 'error_info'?: ErrorInfo;
    public constructor() { 
    }
    public withId(id: string): CustomizeSourceInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CustomizeSourceInfo {
        this['name'] = name;
        return this;
    }
    public withLabel(label: string): CustomizeSourceInfo {
        this['label'] = label;
        return this;
    }
    public withDescription(description: string): CustomizeSourceInfo {
        this['description'] = description;
        return this;
    }
    public withProviderType(providerType: CustomizeSourceInfoProviderTypeEnum | string): CustomizeSourceInfo {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: CustomizeSourceInfoProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): CustomizeSourceInfoProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withEventTypes(eventTypes: Array<CustomizeSourceInfoEventTypes>): CustomizeSourceInfo {
        this['event_types'] = eventTypes;
        return this;
    }
    public set eventTypes(eventTypes: Array<CustomizeSourceInfoEventTypes>  | undefined) {
        this['event_types'] = eventTypes;
    }
    public get eventTypes(): Array<CustomizeSourceInfoEventTypes> | undefined {
        return this['event_types'];
    }
    public withCreatedTime(createdTime: string): CustomizeSourceInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): CustomizeSourceInfo {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withChannelId(channelId: string): CustomizeSourceInfo {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withChannelName(channelName: string): CustomizeSourceInfo {
        this['channel_name'] = channelName;
        return this;
    }
    public set channelName(channelName: string  | undefined) {
        this['channel_name'] = channelName;
    }
    public get channelName(): string | undefined {
        return this['channel_name'];
    }
    public withType(type: string): CustomizeSourceInfo {
        this['type'] = type;
        return this;
    }
    public withDetail(detail: object): CustomizeSourceInfo {
        this['detail'] = detail;
        return this;
    }
    public withStatus(status: CustomizeSourceInfoStatusEnum | string): CustomizeSourceInfo {
        this['status'] = status;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorInfo): CustomizeSourceInfo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorInfo | undefined {
        return this['error_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomizeSourceInfoProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM',
    PARTNER = 'PARTNER'
}
/**
    * @export
    * @enum {string}
    */
export enum CustomizeSourceInfoStatusEnum {
    CREATE_FAILED = 'CREATE_FAILED',
    RUNNING = 'RUNNING',
    ERROR = 'ERROR'
}
