import { CommRequestAssetTree } from './CommRequestAssetTree';


export class CreateAssetTreeRequest {
    private 'project_id'?: string;
    private 'asset_id'?: string;
    private 'parent_id'?: string;
    public body?: CommRequestAssetTree;
    public constructor(projectId?: string, assetId?: string, parentId?: string) { 
        this['project_id'] = projectId;
        this['asset_id'] = assetId;
        this['parent_id'] = parentId;
    }
    public withProjectId(projectId: string): CreateAssetTreeRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAssetId(assetId: string): CreateAssetTreeRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withParentId(parentId: string): CreateAssetTreeRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withBody(body: CommRequestAssetTree): CreateAssetTreeRequest {
        this['body'] = body;
        return this;
    }
}