import { ExecuteTaskInfo } from './ExecuteTaskInfo';


export class SetTaskResultRequest {
    private 'project_uuid'?: string;
    private 'task_uri'?: string;
    public body?: ExecuteTaskInfo;
    public constructor(projectUuid?: string, taskUri?: string) { 
        this['project_uuid'] = projectUuid;
        this['task_uri'] = taskUri;
    }
    public withProjectUuid(projectUuid: string): SetTaskResultRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withTaskUri(taskUri: string): SetTaskResultRequest {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withBody(body: ExecuteTaskInfo): SetTaskResultRequest {
        this['body'] = body;
        return this;
    }
}