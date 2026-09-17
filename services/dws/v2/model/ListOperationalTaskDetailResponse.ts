import { TaskStatusOpenResp } from './TaskStatusOpenResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOperationalTaskDetailResponse extends SdkResponse {
    public data?: Array<TaskStatusOpenResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<TaskStatusOpenResp>): ListOperationalTaskDetailResponse {
        this['data'] = data;
        return this;
    }
    public withCount(count: number): ListOperationalTaskDetailResponse {
        this['count'] = count;
        return this;
    }
}