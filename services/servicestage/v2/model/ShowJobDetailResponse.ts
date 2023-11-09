import { JobInfo } from './JobInfo';
import { TaskInfo } from './TaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobDetailResponse extends SdkResponse {
    private 'task_count'?: number;
    public job?: JobInfo;
    public tasks?: Array<TaskInfo>;
    public constructor() { 
        super();
    }
    public withTaskCount(taskCount: number): ShowJobDetailResponse {
        this['task_count'] = taskCount;
        return this;
    }
    public set taskCount(taskCount: number  | undefined) {
        this['task_count'] = taskCount;
    }
    public get taskCount(): number | undefined {
        return this['task_count'];
    }
    public withJob(job: JobInfo): ShowJobDetailResponse {
        this['job'] = job;
        return this;
    }
    public withTasks(tasks: Array<TaskInfo>): ShowJobDetailResponse {
        this['tasks'] = tasks;
        return this;
    }
}