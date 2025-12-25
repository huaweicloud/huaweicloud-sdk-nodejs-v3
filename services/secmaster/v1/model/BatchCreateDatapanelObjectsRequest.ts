import { DataObjectBatchCreateForm } from './DataObjectBatchCreateForm';


export class BatchCreateDatapanelObjectsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public dataclass?: string;
    public body?: DataObjectBatchCreateForm;
    public constructor(contentType?: string, workspaceId?: string, dataclass?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['dataclass'] = dataclass;
    }
    public withContentType(contentType: string): BatchCreateDatapanelObjectsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): BatchCreateDatapanelObjectsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclass(dataclass: string): BatchCreateDatapanelObjectsRequest {
        this['dataclass'] = dataclass;
        return this;
    }
    public withBody(body: DataObjectBatchCreateForm): BatchCreateDatapanelObjectsRequest {
        this['body'] = body;
        return this;
    }
}