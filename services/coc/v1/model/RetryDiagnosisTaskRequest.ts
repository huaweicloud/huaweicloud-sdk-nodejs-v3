import { RetryDiagnosisTaskRequestBody } from './RetryDiagnosisTaskRequestBody';


export class RetryDiagnosisTaskRequest {
    private 'task_id'?: string;
    public body?: RetryDiagnosisTaskRequestBody;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): RetryDiagnosisTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: RetryDiagnosisTaskRequestBody): RetryDiagnosisTaskRequest {
        this['body'] = body;
        return this;
    }
}