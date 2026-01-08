

export class DownloadStepImageNewRequest {
    private 'project_id'?: string;
    public parent?: string;
    public sub?: string;
    private 'file_name'?: string;
    private 'file_type'?: string;
    public constructor(projectId?: string, parent?: string, sub?: string, fileName?: string, fileType?: string) { 
        this['project_id'] = projectId;
        this['parent'] = parent;
        this['sub'] = sub;
        this['file_name'] = fileName;
        this['file_type'] = fileType;
    }
    public withProjectId(projectId: string): DownloadStepImageNewRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withParent(parent: string): DownloadStepImageNewRequest {
        this['parent'] = parent;
        return this;
    }
    public withSub(sub: string): DownloadStepImageNewRequest {
        this['sub'] = sub;
        return this;
    }
    public withFileName(fileName: string): DownloadStepImageNewRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: string): DownloadStepImageNewRequest {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
}