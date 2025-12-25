import { BatchCreateDataobjectRelationsRequestBody } from './BatchCreateDataobjectRelationsRequestBody';


export class BatchCreateDataobjectRelationsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'dataclass_type'?: string;
    private 'related_dataclass_type'?: string;
    public body?: BatchCreateDataobjectRelationsRequestBody;
    public constructor(contentType?: string, workspaceId?: string, dataclassType?: string, relatedDataclassType?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['dataclass_type'] = dataclassType;
        this['related_dataclass_type'] = relatedDataclassType;
    }
    public withContentType(contentType: string): BatchCreateDataobjectRelationsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): BatchCreateDataobjectRelationsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassType(dataclassType: string): BatchCreateDataobjectRelationsRequest {
        this['dataclass_type'] = dataclassType;
        return this;
    }
    public set dataclassType(dataclassType: string  | undefined) {
        this['dataclass_type'] = dataclassType;
    }
    public get dataclassType(): string | undefined {
        return this['dataclass_type'];
    }
    public withRelatedDataclassType(relatedDataclassType: string): BatchCreateDataobjectRelationsRequest {
        this['related_dataclass_type'] = relatedDataclassType;
        return this;
    }
    public set relatedDataclassType(relatedDataclassType: string  | undefined) {
        this['related_dataclass_type'] = relatedDataclassType;
    }
    public get relatedDataclassType(): string | undefined {
        return this['related_dataclass_type'];
    }
    public withBody(body: BatchCreateDataobjectRelationsRequestBody): BatchCreateDataobjectRelationsRequest {
        this['body'] = body;
        return this;
    }
}