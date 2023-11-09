import { JobInfo } from './JobInfo';
import { TaskInfo } from './TaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobInfoResponse extends SdkResponse {
    private 'task_count'?: number;
    public job?: JobInfo;
    public tasks?: Array<TaskInfo>;
    public constructor() { 
        super();
    }
    public withTaskCount(taskCount: number): ShowJobInfoResponse {
        this['task_count'] = taskCount;
        return this;
    }
    public set taskCount(taskCount: number  | undefined) {
        this['task_count'] = taskCount;
    }
    public get taskCount(): number | undefined {
        return this['task_count'];
    }
    public withJob(job: JobInfo): ShowJobInfoResponse {
        this['job'] = job;
        return this;
    }
    public withTasks(tasks: Array<TaskInfo>): ShowJobInfoResponse {
        this['tasks'] = tasks;
        return this;
    }
}