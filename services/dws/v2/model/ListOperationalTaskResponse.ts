import { TaskInfoVo } from './TaskInfoVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOperationalTaskResponse extends SdkResponse {
    public count?: number;
    public data?: Array<TaskInfoVo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListOperationalTaskResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<TaskInfoVo>): ListOperationalTaskResponse {
        this['data'] = data;
        return this;
    }
}