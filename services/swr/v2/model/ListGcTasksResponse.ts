import { GcTask } from './GcTask';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGcTasksResponse extends SdkResponse {
    private 'page_info'?: PageInfo;
    public tasks?: Array<GcTask>;
    public constructor() { 
        super();
    }
    public withPageInfo(pageInfo: PageInfo): ListGcTasksResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withTasks(tasks: Array<GcTask>): ListGcTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
}