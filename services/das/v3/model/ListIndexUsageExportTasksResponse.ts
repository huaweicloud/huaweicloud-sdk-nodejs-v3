import { IndexUsageExportTaskInfo } from './IndexUsageExportTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIndexUsageExportTasksResponse extends SdkResponse {
    public total?: number;
    private 'task_list'?: Array<IndexUsageExportTaskInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListIndexUsageExportTasksResponse {
        this['total'] = total;
        return this;
    }
    public withTaskList(taskList: Array<IndexUsageExportTaskInfo>): ListIndexUsageExportTasksResponse {
        this['task_list'] = taskList;
        return this;
    }
    public set taskList(taskList: Array<IndexUsageExportTaskInfo>  | undefined) {
        this['task_list'] = taskList;
    }
    public get taskList(): Array<IndexUsageExportTaskInfo> | undefined {
        return this['task_list'];
    }
}