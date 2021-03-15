import { Page } from './Page';
import { Task } from './Task';
import { TaskDetail } from './TaskDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBatchTaskResponse extends SdkResponse {
    public batchtask?: Task;
    private 'task_details'?: Array<TaskDetail> | undefined;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withBatchtask(batchtask: Task): ShowBatchTaskResponse {
        this['batchtask'] = batchtask;
        return this;
    }
    public withTaskDetails(taskDetails: Array<TaskDetail>): ShowBatchTaskResponse {
        this['task_details'] = taskDetails;
        return this;
    }
    public set taskDetails(taskDetails: Array<TaskDetail> | undefined) {
        this['task_details'] = taskDetails;
    }
    public get taskDetails() {
        return this['task_details'];
    }
    public withPage(page: Page): ShowBatchTaskResponse {
        this['page'] = page;
        return this;
    }
}