import { UpdateIgnorePathRequestBody } from './UpdateIgnorePathRequestBody';


export class UpdateIgnorePathRequest {
    private 'project_id'?: string;
    private 'task_id'?: string;
    public body?: UpdateIgnorePathRequestBody;
    public constructor(projectId?: string, taskId?: string) { 
        this['project_id'] = projectId;
        this['task_id'] = taskId;
    }
    public withProjectId(projectId: string): UpdateIgnorePathRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTaskId(taskId: string): UpdateIgnorePathRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: UpdateIgnorePathRequestBody): UpdateIgnorePathRequest {
        this['body'] = body;
        return this;
    }
}