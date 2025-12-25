import { CreateDataobjectRelationRequestBody } from './CreateDataobjectRelationRequestBody';


export class DeleteDataobjectRelationRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'dataclass_type'?: string;
    private 'data_object_id'?: string;
    private 'related_dataclass_type'?: string;
    public body?: CreateDataobjectRelationRequestBody;
    public constructor(contentType?: string, workspaceId?: string, dataclassType?: string, dataObjectId?: string, relatedDataclassType?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['dataclass_type'] = dataclassType;
        this['data_object_id'] = dataObjectId;
        this['related_dataclass_type'] = relatedDataclassType;
    }
    public withContentType(contentType: string): DeleteDataobjectRelationRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): DeleteDataobjectRelationRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassType(dataclassType: string): DeleteDataobjectRelationRequest {
        this['dataclass_type'] = dataclassType;
        return this;
    }
    public set dataclassType(dataclassType: string  | undefined) {
        this['dataclass_type'] = dataclassType;
    }
    public get dataclassType(): string | undefined {
        return this['dataclass_type'];
    }
    public withDataObjectId(dataObjectId: string): DeleteDataobjectRelationRequest {
        this['data_object_id'] = dataObjectId;
        return this;
    }
    public set dataObjectId(dataObjectId: string  | undefined) {
        this['data_object_id'] = dataObjectId;
    }
    public get dataObjectId(): string | undefined {
        return this['data_object_id'];
    }
    public withRelatedDataclassType(relatedDataclassType: string): DeleteDataobjectRelationRequest {
        this['related_dataclass_type'] = relatedDataclassType;
        return this;
    }
    public set relatedDataclassType(relatedDataclassType: string  | undefined) {
        this['related_dataclass_type'] = relatedDataclassType;
    }
    public get relatedDataclassType(): string | undefined {
        return this['related_dataclass_type'];
    }
    public withBody(body: CreateDataobjectRelationRequestBody): DeleteDataobjectRelationRequest {
        this['body'] = body;
        return this;
    }
}