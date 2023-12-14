import { ConsistencyResultRequestBody } from './ConsistencyResultRequestBody';


export class UpdateConsistencyResultRequest {
    private 'task_id'?: string;
    public body?: ConsistencyResultRequestBody;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateConsistencyResultRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: ConsistencyResultRequestBody): UpdateConsistencyResultRequest {
        this['body'] = body;
        return this;
    }
}