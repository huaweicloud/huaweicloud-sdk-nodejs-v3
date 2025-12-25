import { EnableDataclassTypeRequestBody } from './EnableDataclassTypeRequestBody';


export class EnableDataclassTypeRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'dataclass_id'?: string;
    public body?: EnableDataclassTypeRequestBody;
    public constructor(contentType?: string, workspaceId?: string, dataclassId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['dataclass_id'] = dataclassId;
    }
    public withContentType(contentType: string): EnableDataclassTypeRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): EnableDataclassTypeRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassId(dataclassId: string): EnableDataclassTypeRequest {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withBody(body: EnableDataclassTypeRequestBody): EnableDataclassTypeRequest {
        this['body'] = body;
        return this;
    }
}