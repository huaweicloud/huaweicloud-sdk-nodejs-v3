

export class VersionViewVoV5 {
    public id?: string;
    private 'project_id'?: string;
    private 'file_id'?: string;
    public name?: string;
    public path?: string;
    public constructor() { 
    }
    public withId(id: string): VersionViewVoV5 {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): VersionViewVoV5 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFileId(fileId: string): VersionViewVoV5 {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withName(name: string): VersionViewVoV5 {
        this['name'] = name;
        return this;
    }
    public withPath(path: string): VersionViewVoV5 {
        this['path'] = path;
        return this;
    }
}