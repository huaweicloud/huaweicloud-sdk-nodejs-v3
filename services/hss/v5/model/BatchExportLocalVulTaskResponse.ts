
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchExportLocalVulTaskResponse extends SdkResponse {
    private 'record_total_num'?: number;
    private 'task_id'?: string;
    public constructor() { 
        super();
    }
    public withRecordTotalNum(recordTotalNum: number): BatchExportLocalVulTaskResponse {
        this['record_total_num'] = recordTotalNum;
        return this;
    }
    public set recordTotalNum(recordTotalNum: number  | undefined) {
        this['record_total_num'] = recordTotalNum;
    }
    public get recordTotalNum(): number | undefined {
        return this['record_total_num'];
    }
    public withTaskId(taskId: string): BatchExportLocalVulTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}