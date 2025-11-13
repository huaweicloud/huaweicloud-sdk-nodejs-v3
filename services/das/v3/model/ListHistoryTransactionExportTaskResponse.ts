import { ExportTaskDetailResp } from './ExportTaskDetailResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistoryTransactionExportTaskResponse extends SdkResponse {
    public total?: number;
    private 'task_list'?: Array<ExportTaskDetailResp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListHistoryTransactionExportTaskResponse {
        this['total'] = total;
        return this;
    }
    public withTaskList(taskList: Array<ExportTaskDetailResp>): ListHistoryTransactionExportTaskResponse {
        this['task_list'] = taskList;
        return this;
    }
    public set taskList(taskList: Array<ExportTaskDetailResp>  | undefined) {
        this['task_list'] = taskList;
    }
    public get taskList(): Array<ExportTaskDetailResp> | undefined {
        return this['task_list'];
    }
}