import { DevServerJobListResponse } from './DevServerJobListResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDevServerJobsResponse extends SdkResponse {
    public current?: number;
    public data?: Array<DevServerJobListResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): DeleteDevServerJobsResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<DevServerJobListResponse>): DeleteDevServerJobsResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): DeleteDevServerJobsResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): DeleteDevServerJobsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): DeleteDevServerJobsResponse {
        this['total'] = total;
        return this;
    }
}