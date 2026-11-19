import { ColdTableTask } from './ColdTableTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListColdTableTasksResponse extends SdkResponse {
    private 'total_count'?: number;
    public tasks?: Array<ColdTableTask>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListColdTableTasksResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTasks(tasks: Array<ColdTableTask>): ListColdTableTasksResponse {
        this['tasks'] = tasks;
        return this;
    }
}