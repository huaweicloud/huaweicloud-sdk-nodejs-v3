import { DataObjectBatchUpdateForm } from './DataObjectBatchUpdateForm';


export class UpdateDataobjectRequest {
    private 'workspace_id'?: string;
    private 'dataclass_name'?: string;
    private 'data_object_id'?: string;
    public body?: DataObjectBatchUpdateForm;
    public constructor(workspaceId?: string, dataclassName?: string, dataObjectId?: string) { 
        this['workspace_id'] = workspaceId;
        this['dataclass_name'] = dataclassName;
        this['data_object_id'] = dataObjectId;
    }
    public withWorkspaceId(workspaceId: string): UpdateDataobjectRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassName(dataclassName: string): UpdateDataobjectRequest {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withDataObjectId(dataObjectId: string): UpdateDataobjectRequest {
        this['data_object_id'] = dataObjectId;
        return this;
    }
    public set dataObjectId(dataObjectId: string  | undefined) {
        this['data_object_id'] = dataObjectId;
    }
    public get dataObjectId(): string | undefined {
        return this['data_object_id'];
    }
    public withBody(body: DataObjectBatchUpdateForm): UpdateDataobjectRequest {
        this['body'] = body;
        return this;
    }
}