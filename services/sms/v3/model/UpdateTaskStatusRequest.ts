import { UpdateTaskStatusReq } from './UpdateTaskStatusReq';


export class UpdateTaskStatusRequest {
    private 'task_id': string | undefined;
    public body?: UpdateTaskStatusReq;
    public constructor(taskId?: any) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateTaskStatusRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withBody(body: UpdateTaskStatusReq): UpdateTaskStatusRequest {
        this['body'] = body;
        return this;
    }
}