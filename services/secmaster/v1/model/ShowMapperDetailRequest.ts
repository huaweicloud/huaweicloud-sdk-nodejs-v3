

export class ShowMapperDetailRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'mapper_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, mapperId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['mapper_id'] = mapperId;
    }
    public withContentType(contentType: string): ShowMapperDetailRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowMapperDetailRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withMapperId(mapperId: string): ShowMapperDetailRequest {
        this['mapper_id'] = mapperId;
        return this;
    }
    public set mapperId(mapperId: string  | undefined) {
        this['mapper_id'] = mapperId;
    }
    public get mapperId(): string | undefined {
        return this['mapper_id'];
    }
}