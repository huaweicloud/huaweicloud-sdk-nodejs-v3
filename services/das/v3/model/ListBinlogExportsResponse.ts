import { BinlogExportTaskDetailResp } from './BinlogExportTaskDetailResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBinlogExportsResponse extends SdkResponse {
    public total?: number;
    private 'task_list'?: Array<BinlogExportTaskDetailResp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListBinlogExportsResponse {
        this['total'] = total;
        return this;
    }
    public withTaskList(taskList: Array<BinlogExportTaskDetailResp>): ListBinlogExportsResponse {
        this['task_list'] = taskList;
        return this;
    }
    public set taskList(taskList: Array<BinlogExportTaskDetailResp>  | undefined) {
        this['task_list'] = taskList;
    }
    public get taskList(): Array<BinlogExportTaskDetailResp> | undefined {
        return this['task_list'];
    }
}