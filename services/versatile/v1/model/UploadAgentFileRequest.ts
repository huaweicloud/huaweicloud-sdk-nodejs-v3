import { UploadAgentFileRequestBody } from './UploadAgentFileRequestBody';


export class UploadAgentFileRequest {
    private 'workspace_id'?: string;
    public expires?: number;
    private 'is_image'?: boolean;
    public body?: UploadAgentFileRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): UploadAgentFileRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withExpires(expires: number): UploadAgentFileRequest {
        this['expires'] = expires;
        return this;
    }
    public withIsImage(isImage: boolean): UploadAgentFileRequest {
        this['is_image'] = isImage;
        return this;
    }
    public set isImage(isImage: boolean  | undefined) {
        this['is_image'] = isImage;
    }
    public get isImage(): boolean | undefined {
        return this['is_image'];
    }
    public withBody(body: UploadAgentFileRequestBody): UploadAgentFileRequest {
        this['body'] = body;
        return this;
    }
}