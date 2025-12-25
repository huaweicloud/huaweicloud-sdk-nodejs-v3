import { AuthorizeHandlerRequestBody } from './AuthorizeHandlerRequestBody';


export class HandleShipperAuthorizationRequest {
    private 'workspace_id'?: string;
    public body?: AuthorizeHandlerRequestBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): HandleShipperAuthorizationRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: AuthorizeHandlerRequestBody): HandleShipperAuthorizationRequest {
        this['body'] = body;
        return this;
    }
}