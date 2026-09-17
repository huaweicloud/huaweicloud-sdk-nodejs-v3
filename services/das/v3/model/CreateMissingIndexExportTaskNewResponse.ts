
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMissingIndexExportTaskNewResponse extends SdkResponse {
    private 'task_id'?: number;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: number): CreateMissingIndexExportTaskNewResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
}