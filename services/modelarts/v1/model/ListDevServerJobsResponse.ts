import { DevServerJobListResponse } from './DevServerJobListResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDevServerJobsResponse extends SdkResponse {
    public current?: number;
    public data?: Array<DevServerJobListResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListDevServerJobsResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<DevServerJobListResponse>): ListDevServerJobsResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListDevServerJobsResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListDevServerJobsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListDevServerJobsResponse {
        this['total'] = total;
        return this;
    }
}