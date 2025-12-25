import { CreateAssetsRequestBody } from './CreateAssetsRequestBody';


export class UpdateConnectionRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'asset_id'?: string;
    public body?: CreateAssetsRequestBody;
    public constructor(contentType?: string, workspaceId?: string, assetId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['asset_id'] = assetId;
    }
    public withContentType(contentType: string): UpdateConnectionRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateConnectionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAssetId(assetId: string): UpdateConnectionRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withBody(body: CreateAssetsRequestBody): UpdateConnectionRequest {
        this['body'] = body;
        return this;
    }
}