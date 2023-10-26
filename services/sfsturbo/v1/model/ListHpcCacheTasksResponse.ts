import { OneHpcCacheTaskInfoResp } from './OneHpcCacheTaskInfoResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHpcCacheTasksResponse extends SdkResponse {
    public tasks?: Array<OneHpcCacheTaskInfoResp>;
    public count?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTasks(tasks: Array<OneHpcCacheTaskInfoResp>): ListHpcCacheTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
    public withCount(count: number): ListHpcCacheTasksResponse {
        this['count'] = count;
        return this;
    }
    public withXRequestId(xRequestId: string): ListHpcCacheTasksResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}