import { DownLoadPathReq } from './DownLoadPathReq';


export class CreateAssetFileDownLoadPathRequest {
    private 'workspace_id'?: string;
    private 'asset_id'?: string;
    public body?: DownLoadPathReq;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withWorkspaceId(workspaceId: string): CreateAssetFileDownLoadPathRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAssetId(assetId: string): CreateAssetFileDownLoadPathRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withBody(body: DownLoadPathReq): CreateAssetFileDownLoadPathRequest {
        this['body'] = body;
        return this;
    }
}