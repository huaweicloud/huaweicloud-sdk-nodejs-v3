

export class ShowSecurityMemberSyncTaskRequest {
    public workspace?: string;
    private 'task_id'?: string;
    public constructor(workspace?: string, taskId?: string) { 
        this['workspace'] = workspace;
        this['task_id'] = taskId;
    }
    public withWorkspace(workspace: string): ShowSecurityMemberSyncTaskRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withTaskId(taskId: string): ShowSecurityMemberSyncTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}