import { QueryTaskAssignCasesInfo } from './QueryTaskAssignCasesInfo';


export class ListTaskAssignCasesRequest {
    private 'project_id'?: string;
    private 'task_id'?: string;
    public body?: QueryTaskAssignCasesInfo;
    public constructor(projectId?: string, taskId?: string) { 
        this['project_id'] = projectId;
        this['task_id'] = taskId;
    }
    public withProjectId(projectId: string): ListTaskAssignCasesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTaskId(taskId: string): ListTaskAssignCasesRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: QueryTaskAssignCasesInfo): ListTaskAssignCasesRequest {
        this['body'] = body;
        return this;
    }
}