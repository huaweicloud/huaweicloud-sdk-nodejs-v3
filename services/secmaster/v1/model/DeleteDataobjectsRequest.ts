import { DataObjectDeleteForm } from './DataObjectDeleteForm';


export class DeleteDataobjectsRequest {
    private 'workspace_id'?: string;
    private 'dataclass_name'?: string;
    public body?: DataObjectDeleteForm;
    public constructor(workspaceId?: string, dataclassName?: string) { 
        this['workspace_id'] = workspaceId;
        this['dataclass_name'] = dataclassName;
    }
    public withWorkspaceId(workspaceId: string): DeleteDataobjectsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassName(dataclassName: string): DeleteDataobjectsRequest {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withBody(body: DataObjectDeleteForm): DeleteDataobjectsRequest {
        this['body'] = body;
        return this;
    }
}