import { UpdateDpeInfoStatusRequestBody } from './UpdateDpeInfoStatusRequestBody';


export class UpdateMappingInfoStatusRequest {
    private 'Content-Type'?: string;
    private 'workspace_id'?: string;
    private 'mapping_id'?: string;
    public body?: UpdateDpeInfoStatusRequestBody;
    public constructor(contentType?: string, workspaceId?: string, mappingId?: string) { 
        this['Content-Type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['mapping_id'] = mappingId;
    }
    public withContentType(contentType: string): UpdateMappingInfoStatusRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateMappingInfoStatusRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withMappingId(mappingId: string): UpdateMappingInfoStatusRequest {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string  | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId(): string | undefined {
        return this['mapping_id'];
    }
    public withBody(body: UpdateDpeInfoStatusRequestBody): UpdateMappingInfoStatusRequest {
        this['body'] = body;
        return this;
    }
}