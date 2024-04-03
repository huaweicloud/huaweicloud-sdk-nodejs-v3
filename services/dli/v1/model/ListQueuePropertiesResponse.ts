import { QueueProperty } from './QueueProperty';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQueuePropertiesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public properties?: Array<QueueProperty>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListQueuePropertiesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListQueuePropertiesResponse {
        this['message'] = message;
        return this;
    }
    public withProperties(properties: Array<QueueProperty>): ListQueuePropertiesResponse {
        this['properties'] = properties;
        return this;
    }
}