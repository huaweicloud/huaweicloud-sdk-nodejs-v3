import { UpdateTaskSpeedReq } from './UpdateTaskSpeedReq';


export class UpdateTaskSpeedRequest {
    private 'task_id': string | undefined;
    public body?: UpdateTaskSpeedReq;
    public constructor(taskId?: any) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateTaskSpeedRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withBody(body: UpdateTaskSpeedReq): UpdateTaskSpeedRequest {
        this['body'] = body;
        return this;
    }
}