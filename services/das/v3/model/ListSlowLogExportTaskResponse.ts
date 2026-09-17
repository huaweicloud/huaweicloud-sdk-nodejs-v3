import { SlowLogExportTask } from './SlowLogExportTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowLogExportTaskResponse extends SdkResponse {
    public total?: number;
    private 'task_list'?: Array<SlowLogExportTask>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSlowLogExportTaskResponse {
        this['total'] = total;
        return this;
    }
    public withTaskList(taskList: Array<SlowLogExportTask>): ListSlowLogExportTaskResponse {
        this['task_list'] = taskList;
        return this;
    }
    public set taskList(taskList: Array<SlowLogExportTask>  | undefined) {
        this['task_list'] = taskList;
    }
    public get taskList(): Array<SlowLogExportTask> | undefined {
        return this['task_list'];
    }
}