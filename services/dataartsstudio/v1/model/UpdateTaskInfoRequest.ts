import { MetadataCollectionTask } from './MetadataCollectionTask';


export class UpdateTaskInfoRequest {
    public workspace?: string;
    private 'task_id'?: string;
    public body?: MetadataCollectionTask;
    public constructor(workspace?: string, taskId?: string) { 
        this['workspace'] = workspace;
        this['task_id'] = taskId;
    }
    public withWorkspace(workspace: string): UpdateTaskInfoRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withTaskId(taskId: string): UpdateTaskInfoRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: MetadataCollectionTask): UpdateTaskInfoRequest {
        this['body'] = body;
        return this;
    }
}