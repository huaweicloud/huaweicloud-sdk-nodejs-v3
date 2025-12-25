import { CreateShipperBody } from './CreateShipperBody';


export class CreateShipperRequest {
    private 'workspace_id'?: string;
    public body?: CreateShipperBody;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): CreateShipperRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: CreateShipperBody): CreateShipperRequest {
        this['body'] = body;
        return this;
    }
}