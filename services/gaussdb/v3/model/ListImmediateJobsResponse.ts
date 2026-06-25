import { TaskDetailInfo } from './TaskDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImmediateJobsResponse extends SdkResponse {
    public jobs?: Array<TaskDetailInfo>;
    private 'total_count'?: number;
    private 'action_names'?: Array<string>;
    public constructor() { 
        super();
    }
    public withJobs(jobs: Array<TaskDetailInfo>): ListImmediateJobsResponse {
        this['jobs'] = jobs;
        return this;
    }
    public withTotalCount(totalCount: number): ListImmediateJobsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withActionNames(actionNames: Array<string>): ListImmediateJobsResponse {
        this['action_names'] = actionNames;
        return this;
    }
    public set actionNames(actionNames: Array<string>  | undefined) {
        this['action_names'] = actionNames;
    }
    public get actionNames(): Array<string> | undefined {
        return this['action_names'];
    }
}