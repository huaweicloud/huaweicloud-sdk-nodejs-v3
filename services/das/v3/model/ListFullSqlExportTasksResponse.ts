import { FullSqlExportTaskInfo } from './FullSqlExportTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFullSqlExportTasksResponse extends SdkResponse {
    public total?: number;
    private 'task_list'?: Array<FullSqlExportTaskInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFullSqlExportTasksResponse {
        this['total'] = total;
        return this;
    }
    public withTaskList(taskList: Array<FullSqlExportTaskInfo>): ListFullSqlExportTasksResponse {
        this['task_list'] = taskList;
        return this;
    }
    public set taskList(taskList: Array<FullSqlExportTaskInfo>  | undefined) {
        this['task_list'] = taskList;
    }
    public get taskList(): Array<FullSqlExportTaskInfo> | undefined {
        return this['task_list'];
    }
}