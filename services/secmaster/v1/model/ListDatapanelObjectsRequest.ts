import { DataobjectSearch } from './DataobjectSearch';


export class ListDatapanelObjectsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    public dataclass?: string;
    public body?: DataobjectSearch;
    public constructor(contentType?: string, workspaceId?: string, dataclass?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['dataclass'] = dataclass;
    }
    public withContentType(contentType: string): ListDatapanelObjectsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListDatapanelObjectsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclass(dataclass: string): ListDatapanelObjectsRequest {
        this['dataclass'] = dataclass;
        return this;
    }
    public withBody(body: DataobjectSearch): ListDatapanelObjectsRequest {
        this['body'] = body;
        return this;
    }
}