

export class UploadAttachmentInfo {
    public id?: string;
    private 'file_name'?: string;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withId(id: string): UploadAttachmentInfo {
        this['id'] = id;
        return this;
    }
    public withFileName(fileName: string): UploadAttachmentInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withWorkspaceId(workspaceId: string): UploadAttachmentInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}