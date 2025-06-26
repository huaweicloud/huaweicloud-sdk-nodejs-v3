import { UpdateScheduleTaskReq } from './UpdateScheduleTaskReq';


export class UpdateScheduleTaskRequest {
    private 'task_id'?: string;
    public body?: UpdateScheduleTaskReq;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateScheduleTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: UpdateScheduleTaskReq): UpdateScheduleTaskRequest {
        this['body'] = body;
        return this;
    }
}