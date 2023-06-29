
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDeployTaskByTemplateResponse extends SdkResponse {
    private 'task_name'?: string | undefined;
    private 'task_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTaskName(taskName: string): CreateDeployTaskByTemplateResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName() {
        return this['task_name'];
    }
    public withTaskId(taskId: string): CreateDeployTaskByTemplateResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
}