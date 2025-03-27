import { SetConsistencyResultRequestBody } from './SetConsistencyResultRequestBody';


export class UpdateConsistencyResultRequest {
    private 'task_id'?: string;
    public body?: SetConsistencyResultRequestBody;
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
    public withBody(body: SetConsistencyResultRequestBody): UpdateConsistencyResultRequest {
        this['body'] = body;
        return this;
    }
}