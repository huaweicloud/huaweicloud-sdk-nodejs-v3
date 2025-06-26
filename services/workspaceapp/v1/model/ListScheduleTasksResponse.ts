import { PageResp } from './PageResp';
import { ScheduleTask } from './ScheduleTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduleTasksResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ScheduleTask>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListScheduleTasksResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ScheduleTask>): ListScheduleTasksResponse {
        this['items'] = items;
        return this;
    }
}