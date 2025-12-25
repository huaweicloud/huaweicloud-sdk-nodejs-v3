import { DisableConsumptionV2RequestBody } from './DisableConsumptionV2RequestBody';


export class DisableDataConsumptionRequest {
    private 'workspace_id'?: string;
    private 'table_id'?: string;
    public body?: DisableConsumptionV2RequestBody;
    public constructor(workspaceId?: string, tableId?: string) { 
        this['workspace_id'] = workspaceId;
        this['table_id'] = tableId;
    }
    public withWorkspaceId(workspaceId: string): DisableDataConsumptionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTableId(tableId: string): DisableDataConsumptionRequest {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withBody(body: DisableConsumptionV2RequestBody): DisableDataConsumptionRequest {
        this['body'] = body;
        return this;
    }
}