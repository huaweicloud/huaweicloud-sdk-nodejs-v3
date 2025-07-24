import { InitExecuteTaskInfo } from './InitExecuteTaskInfo';


export class CreateTaskDefaultResultRequest {
    private 'project_id'?: string;
    private 'task_uri'?: string;
    public body?: InitExecuteTaskInfo;
    public constructor(projectId?: string, taskUri?: string) { 
        this['project_id'] = projectId;
        this['task_uri'] = taskUri;
    }
    public withProjectId(projectId: string): CreateTaskDefaultResultRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTaskUri(taskUri: string): CreateTaskDefaultResultRequest {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withBody(body: InitExecuteTaskInfo): CreateTaskDefaultResultRequest {
        this['body'] = body;
        return this;
    }
}