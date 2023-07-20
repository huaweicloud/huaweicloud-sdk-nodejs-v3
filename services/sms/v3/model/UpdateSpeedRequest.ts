import { SpeedLimit } from './SpeedLimit';


export class UpdateSpeedRequest {
    private 'task_id'?: string;
    public body?: SpeedLimit;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateSpeedRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: SpeedLimit): UpdateSpeedRequest {
        this['body'] = body;
        return this;
    }
}