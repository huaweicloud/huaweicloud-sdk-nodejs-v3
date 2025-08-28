
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddFullSqlTaskResponse extends SdkResponse {
    private 'task_id'?: number;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: number): AddFullSqlTaskResponse {
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