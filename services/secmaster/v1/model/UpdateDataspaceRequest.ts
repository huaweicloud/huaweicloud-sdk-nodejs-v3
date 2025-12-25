import { UpdateDataspaceRequestBody } from './UpdateDataspaceRequestBody';


export class UpdateDataspaceRequest {
    private 'workspace_id'?: string;
    private 'dataspace_id'?: string;
    public body?: UpdateDataspaceRequestBody;
    public constructor(workspaceId?: string, dataspaceId?: string) { 
        this['workspace_id'] = workspaceId;
        this['dataspace_id'] = dataspaceId;
    }
    public withWorkspaceId(workspaceId: string): UpdateDataspaceRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataspaceId(dataspaceId: string): UpdateDataspaceRequest {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withBody(body: UpdateDataspaceRequestBody): UpdateDataspaceRequest {
        this['body'] = body;
        return this;
    }
}