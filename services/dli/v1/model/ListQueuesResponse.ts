import { QueueDetails } from './QueueDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQueuesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public queues?: Array<QueueDetails>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListQueuesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListQueuesResponse {
        this['message'] = message;
        return this;
    }
    public withQueues(queues: Array<QueueDetails>): ListQueuesResponse {
        this['queues'] = queues;
        return this;
    }
}