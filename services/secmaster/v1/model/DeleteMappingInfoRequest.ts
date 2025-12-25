

export class DeleteMappingInfoRequest {
    private 'content-type'?: string;
    private 'mapping_id'?: string;
    private 'workspace_id'?: string;
    public constructor(contentType?: string, mappingId?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['mapping_id'] = mappingId;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): DeleteMappingInfoRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withMappingId(mappingId: string): DeleteMappingInfoRequest {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string  | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId(): string | undefined {
        return this['mapping_id'];
    }
    public withWorkspaceId(workspaceId: string): DeleteMappingInfoRequest {
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