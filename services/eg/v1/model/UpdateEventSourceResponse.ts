import { CustomizeSourceInfoEventTypes } from './CustomizeSourceInfoEventTypes';
import { ErrorInfo } from './ErrorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEventSourceResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public label?: string;
    public description?: string;
    private 'provider_type'?: UpdateEventSourceResponseProviderTypeEnum | string;
    private 'event_types'?: Array<CustomizeSourceInfoEventTypes>;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    private 'channel_id'?: string;
    private 'channel_name'?: string;
    public type?: string;
    public detail?: object;
    public status?: UpdateEventSourceResponseStatusEnum | string;
    private 'error_info'?: ErrorInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateEventSourceResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateEventSourceResponse {
        this['name'] = name;
        return this;
    }
    public withLabel(label: string): UpdateEventSourceResponse {
        this['label'] = label;
        return this;
    }
    public withDescription(description: string): UpdateEventSourceResponse {
        this['description'] = description;
        return this;
    }
    public withProviderType(providerType: UpdateEventSourceResponseProviderTypeEnum | string): UpdateEventSourceResponse {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: UpdateEventSourceResponseProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): UpdateEventSourceResponseProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withEventTypes(eventTypes: Array<CustomizeSourceInfoEventTypes>): UpdateEventSourceResponse {
        this['event_types'] = eventTypes;
        return this;
    }
    public set eventTypes(eventTypes: Array<CustomizeSourceInfoEventTypes>  | undefined) {
        this['event_types'] = eventTypes;
    }
    public get eventTypes(): Array<CustomizeSourceInfoEventTypes> | undefined {
        return this['event_types'];
    }
    public withCreatedTime(createdTime: string): UpdateEventSourceResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): UpdateEventSourceResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withChannelId(channelId: string): UpdateEventSourceResponse {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withChannelName(channelName: string): UpdateEventSourceResponse {
        this['channel_name'] = channelName;
        return this;
    }
    public set channelName(channelName: string  | undefined) {
        this['channel_name'] = channelName;
    }
    public get channelName(): string | undefined {
        return this['channel_name'];
    }
    public withType(type: string): UpdateEventSourceResponse {
        this['type'] = type;
        return this;
    }
    public withDetail(detail: object): UpdateEventSourceResponse {
        this['detail'] = detail;
        return this;
    }
    public withStatus(status: UpdateEventSourceResponseStatusEnum | string): UpdateEventSourceResponse {
        this['status'] = status;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorInfo): UpdateEventSourceResponse {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorInfo | undefined {
        return this['error_info'];
    }
    public withXRequestId(xRequestId: string): UpdateEventSourceResponse {
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
export enum UpdateEventSourceResponseProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM',
    PARTNER = 'PARTNER'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateEventSourceResponseStatusEnum {
    CREATE_FAILED = 'CREATE_FAILED',
    RUNNING = 'RUNNING',
    ERROR = 'ERROR'
}
