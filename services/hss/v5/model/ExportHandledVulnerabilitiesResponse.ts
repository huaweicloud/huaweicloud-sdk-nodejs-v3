
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportHandledVulnerabilitiesResponse extends SdkResponse {
    private 'task_id'?: string;
    public constructor() { 
        super();
    }
    public withTaskId(taskId: string): ExportHandledVulnerabilitiesResponse {
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