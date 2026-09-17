

export class ShowTaskRequest {
    private 'project_uuid'?: string;
    private 'task_uri'?: string;
    private 'version_uri'?: string;
    public constructor(projectUuid?: string, taskUri?: string) { 
        this['project_uuid'] = projectUuid;
        this['task_uri'] = taskUri;
    }
    public withProjectUuid(projectUuid: string): ShowTaskRequest {
        this['project_uuid'] = projectUuid;
        return this;
    }
    public set projectUuid(projectUuid: string  | undefined) {
        this['project_uuid'] = projectUuid;
    }
    public get projectUuid(): string | undefined {
        return this['project_uuid'];
    }
    public withTaskUri(taskUri: string): ShowTaskRequest {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withVersionUri(versionUri: string): ShowTaskRequest {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
}