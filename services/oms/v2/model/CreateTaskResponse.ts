
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTaskResponse extends SdkResponse {
    public id?: number;
    private 'task_name'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateTaskResponse {
        this['id'] = id;
        return this;
    }
    public withTaskName(taskName: string): CreateTaskResponse {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
}