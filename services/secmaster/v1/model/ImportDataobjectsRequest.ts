import { ImportDataobjectsRequestBody } from './ImportDataobjectsRequestBody';


export class ImportDataobjectsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'dataclass_name'?: string;
    public body?: ImportDataobjectsRequestBody;
    public constructor(contentType?: string, workspaceId?: string, dataclassName?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['dataclass_name'] = dataclassName;
    }
    public withContentType(contentType: string): ImportDataobjectsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ImportDataobjectsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassName(dataclassName: string): ImportDataobjectsRequest {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withBody(body: ImportDataobjectsRequestBody): ImportDataobjectsRequest {
        this['body'] = body;
        return this;
    }
}