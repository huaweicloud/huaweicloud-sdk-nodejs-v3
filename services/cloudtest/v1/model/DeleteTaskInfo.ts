

export class DeleteTaskInfo {
    private 'version_uri'?: string;
    private 'task_uris'?: Array<string>;
    public constructor() { 
    }
    public withVersionUri(versionUri: string): DeleteTaskInfo {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
    public withTaskUris(taskUris: Array<string>): DeleteTaskInfo {
        this['task_uris'] = taskUris;
        return this;
    }
    public set taskUris(taskUris: Array<string>  | undefined) {
        this['task_uris'] = taskUris;
    }
    public get taskUris(): Array<string> | undefined {
        return this['task_uris'];
    }
}