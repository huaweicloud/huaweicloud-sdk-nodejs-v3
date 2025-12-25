import { DeleteShipperRequestBody } from './DeleteShipperRequestBody';


export class DeleteShipperRequest {
    private 'workspace_id'?: string;
    public body?: DeleteShipperRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): DeleteShipperRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: DeleteShipperRequestBody): DeleteShipperRequest {
        this['body'] = body;
        return this;
    }
}