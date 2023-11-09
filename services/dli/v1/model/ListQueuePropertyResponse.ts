import { ListQueuePropertyRespProperties } from './ListQueuePropertyRespProperties';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQueuePropertyResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public properties?: Array<ListQueuePropertyRespProperties>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListQueuePropertyResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListQueuePropertyResponse {
        this['message'] = message;
        return this;
    }
    public withProperties(properties: Array<ListQueuePropertyRespProperties>): ListQueuePropertyResponse {
        this['properties'] = properties;
        return this;
    }
}