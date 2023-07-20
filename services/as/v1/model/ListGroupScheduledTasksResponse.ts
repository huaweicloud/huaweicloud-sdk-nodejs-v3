import { PageInfo } from './PageInfo';
import { ScheduledTaskDetail } from './ScheduledTaskDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupScheduledTasksResponse extends SdkResponse {
    private 'page_info'?: PageInfo;
    private 'scheduled_tasks'?: Array<ScheduledTaskDetail>;
    public constructor() { 
        super();
    }
    public withPageInfo(pageInfo: PageInfo): ListGroupScheduledTasksResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withScheduledTasks(scheduledTasks: Array<ScheduledTaskDetail>): ListGroupScheduledTasksResponse {
        this['scheduled_tasks'] = scheduledTasks;
        return this;
    }
    public set scheduledTasks(scheduledTasks: Array<ScheduledTaskDetail>  | undefined) {
        this['scheduled_tasks'] = scheduledTasks;
    }
    public get scheduledTasks(): Array<ScheduledTaskDetail> | undefined {
        return this['scheduled_tasks'];
    }
}