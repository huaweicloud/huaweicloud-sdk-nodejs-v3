import { MissingIndexExportTaskInfo } from './MissingIndexExportTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMissingIndexExportTasksResponse extends SdkResponse {
    public total?: number;
    private 'task_list'?: Array<MissingIndexExportTaskInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListMissingIndexExportTasksResponse {
        this['total'] = total;
        return this;
    }
    public withTaskList(taskList: Array<MissingIndexExportTaskInfo>): ListMissingIndexExportTasksResponse {
        this['task_list'] = taskList;
        return this;
    }
    public set taskList(taskList: Array<MissingIndexExportTaskInfo>  | undefined) {
        this['task_list'] = taskList;
    }
    public get taskList(): Array<MissingIndexExportTaskInfo> | undefined {
        return this['task_list'];
    }
}