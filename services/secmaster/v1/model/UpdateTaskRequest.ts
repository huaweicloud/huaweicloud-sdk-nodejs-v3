import { ModifyTaskInfo } from './ModifyTaskInfo';


export class UpdateTaskRequest {
    private 'Content-Type'?: string;
    private 'workspace_id'?: string;
    private 'task_id'?: string;
    public body?: ModifyTaskInfo;
    public constructor(contentType?: string, workspaceId?: string, taskId?: string) { 
        this['Content-Type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['task_id'] = taskId;
    }
    public withContentType(contentType: string): UpdateTaskRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateTaskRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTaskId(taskId: string): UpdateTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: ModifyTaskInfo): UpdateTaskRequest {
        this['body'] = body;
        return this;
    }
}