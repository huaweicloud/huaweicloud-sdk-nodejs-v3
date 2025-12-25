import { ListTableHistogramsRequestBody } from './ListTableHistogramsRequestBody';


export class ListTableHistogramsRequest {
    private 'workspace_id'?: string;
    private 'table_id'?: string;
    public body?: ListTableHistogramsRequestBody;
    public constructor(workspaceId?: string, tableId?: string) { 
        this['workspace_id'] = workspaceId;
        this['table_id'] = tableId;
    }
    public withWorkspaceId(workspaceId: string): ListTableHistogramsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTableId(tableId: string): ListTableHistogramsRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withBody(body: ListTableHistogramsRequestBody): ListTableHistogramsRequest {
        this['body'] = body;
        return this;
    }
}