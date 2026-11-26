import { CreateAssetReq } from './CreateAssetReq';


export class CreateAssetRequest {
    private 'workspace_id'?: string;
    private 'X-Storage-Token'?: string;
    public body?: CreateAssetReq;
    public constructor() { 
    }
    public withWorkspaceId(workspaceId: string): CreateAssetRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withXStorageToken(xStorageToken: string): CreateAssetRequest {
        this['X-Storage-Token'] = xStorageToken;
        return this;
    }
    public set xStorageToken(xStorageToken: string  | undefined) {
        this['X-Storage-Token'] = xStorageToken;
    }
    public get xStorageToken(): string | undefined {
        return this['X-Storage-Token'];
    }
    public withBody(body: CreateAssetReq): CreateAssetRequest {
        this['body'] = body;
        return this;
    }
}