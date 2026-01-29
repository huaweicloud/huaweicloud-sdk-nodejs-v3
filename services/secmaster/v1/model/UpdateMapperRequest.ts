import { CreateDpeMappingRequestBody } from './CreateDpeMappingRequestBody';


export class UpdateMapperRequest {
    private 'Content-Type'?: string;
    private 'workspace_id'?: string;
    private 'mapper_id'?: string;
    public body?: CreateDpeMappingRequestBody;
    public constructor(contentType?: string, workspaceId?: string, mapperId?: string) { 
        this['Content-Type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['mapper_id'] = mapperId;
    }
    public withContentType(contentType: string): UpdateMapperRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateMapperRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withMapperId(mapperId: string): UpdateMapperRequest {
        this['mapper_id'] = mapperId;
        return this;
    }
    public set mapperId(mapperId: string  | undefined) {
        this['mapper_id'] = mapperId;
    }
    public get mapperId(): string | undefined {
        return this['mapper_id'];
    }
    public withBody(body: CreateDpeMappingRequestBody): UpdateMapperRequest {
        this['body'] = body;
        return this;
    }
}