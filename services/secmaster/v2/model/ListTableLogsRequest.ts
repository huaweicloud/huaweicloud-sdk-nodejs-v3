import { ListTableLogsRequestBody } from './ListTableLogsRequestBody';


export class ListTableLogsRequest {
    private 'workspace_id'?: string;
    private 'table_id'?: string;
    public body?: ListTableLogsRequestBody;
    public constructor(workspaceId?: string, tableId?: string) { 
        this['workspace_id'] = workspaceId;
        this['table_id'] = tableId;
    }
    public withWorkspaceId(workspaceId: string): ListTableLogsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTableId(tableId: string): ListTableLogsRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withBody(body: ListTableLogsRequestBody): ListTableLogsRequest {
        this['body'] = body;
        return this;
    }
}