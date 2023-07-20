import { QueueInfo } from './QueueInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListElasticResourcePoolQueuesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public queues?: Array<QueueInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListElasticResourcePoolQueuesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListElasticResourcePoolQueuesResponse {
        this['message'] = message;
        return this;
    }
    public withQueues(queues: Array<QueueInfo>): ListElasticResourcePoolQueuesResponse {
        this['queues'] = queues;
        return this;
    }
    public withCount(count: number): ListElasticResourcePoolQueuesResponse {
        this['count'] = count;
        return this;
    }
}