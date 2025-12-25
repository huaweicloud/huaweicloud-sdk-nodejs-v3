import { UpdateLayoutFieldRequestBody } from './UpdateLayoutFieldRequestBody';


export class UpdateLayoutFieldRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'field_id'?: string;
    public body?: UpdateLayoutFieldRequestBody;
    public constructor(contentType?: string, workspaceId?: string, fieldId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['field_id'] = fieldId;
    }
    public withContentType(contentType: string): UpdateLayoutFieldRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateLayoutFieldRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withFieldId(fieldId: string): UpdateLayoutFieldRequest {
        this['field_id'] = fieldId;
        return this;
    }
    public set fieldId(fieldId: string  | undefined) {
        this['field_id'] = fieldId;
    }
    public get fieldId(): string | undefined {
        return this['field_id'];
    }
    public withBody(body: UpdateLayoutFieldRequestBody): UpdateLayoutFieldRequest {
        this['body'] = body;
        return this;
    }
}