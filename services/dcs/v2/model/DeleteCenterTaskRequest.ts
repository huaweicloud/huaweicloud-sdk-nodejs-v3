import { DeleteCenterTaskRequestBody } from './DeleteCenterTaskRequestBody';


export class DeleteCenterTaskRequest {
    private 'task_id'?: string;
    public body?: DeleteCenterTaskRequestBody;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): DeleteCenterTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: DeleteCenterTaskRequestBody): DeleteCenterTaskRequest {
        this['body'] = body;
        return this;
    }
}