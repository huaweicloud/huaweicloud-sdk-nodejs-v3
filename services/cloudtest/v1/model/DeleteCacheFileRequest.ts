

export class DeleteCacheFileRequest {
    private 'project_id'?: string;
    private 'file_path'?: string;
    public uri?: string;
    private 'parent_uri'?: string;
    private 'bak_up'?: boolean;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): DeleteCacheFileRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFilePath(filePath: string): DeleteCacheFileRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withUri(uri: string): DeleteCacheFileRequest {
        this['uri'] = uri;
        return this;
    }
    public withParentUri(parentUri: string): DeleteCacheFileRequest {
        this['parent_uri'] = parentUri;
        return this;
    }
    public set parentUri(parentUri: string  | undefined) {
        this['parent_uri'] = parentUri;
    }
    public get parentUri(): string | undefined {
        return this['parent_uri'];
    }
    public withBakUp(bakUp: boolean): DeleteCacheFileRequest {
        this['bak_up'] = bakUp;
        return this;
    }
    public set bakUp(bakUp: boolean  | undefined) {
        this['bak_up'] = bakUp;
    }
    public get bakUp(): boolean | undefined {
        return this['bak_up'];
    }
}