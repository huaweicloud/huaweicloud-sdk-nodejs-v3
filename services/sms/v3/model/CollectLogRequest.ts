import { UploadLogRequestBody } from './UploadLogRequestBody';


export class CollectLogRequest {
    private 'task_id': string | undefined;
    public body?: UploadLogRequestBody;
    public constructor(taskId?: any) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): CollectLogRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withBody(body: UploadLogRequestBody): CollectLogRequest {
        this['body'] = body;
        return this;
    }
}