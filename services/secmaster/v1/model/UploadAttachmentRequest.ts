import { UploadAttachmentRequestBody } from './UploadAttachmentRequestBody';


export class UploadAttachmentRequest {
    private 'workspace_id'?: string;
    public body?: UploadAttachmentRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): UploadAttachmentRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: UploadAttachmentRequestBody): UploadAttachmentRequest {
        this['body'] = body;
        return this;
    }
}