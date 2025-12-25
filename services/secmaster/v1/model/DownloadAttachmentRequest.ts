

export class DownloadAttachmentRequest {
    private 'workspace_id'?: string;
    private 'attach_id'?: string;
    public constructor(workspaceId?: string, attachId?: string) { 
        this['workspace_id'] = workspaceId;
        this['attach_id'] = attachId;
    }
    public withWorkspaceId(workspaceId: string): DownloadAttachmentRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAttachId(attachId: string): DownloadAttachmentRequest {
        this['attach_id'] = attachId;
        return this;
    }
    public set attachId(attachId: string  | undefined) {
        this['attach_id'] = attachId;
    }
    public get attachId(): string | undefined {
        return this['attach_id'];
    }
}