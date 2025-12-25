import { CommonDataObjectExportRequest } from './CommonDataObjectExportRequest';


export class ExportDataobjectsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'dataclass_name'?: string;
    public body?: CommonDataObjectExportRequest;
    public constructor(contentType?: string, workspaceId?: string, dataclassName?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['dataclass_name'] = dataclassName;
    }
    public withContentType(contentType: string): ExportDataobjectsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ExportDataobjectsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassName(dataclassName: string): ExportDataobjectsRequest {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withBody(body: CommonDataObjectExportRequest): ExportDataobjectsRequest {
        this['body'] = body;
        return this;
    }
}