import { CommRequestAssetExportParam } from './CommRequestAssetExportParam';


export class ExportFactorRequest {
    private 'project_id'?: string;
    private 'asset_id'?: string;
    public body?: CommRequestAssetExportParam;
    public constructor(projectId?: string, assetId?: string) { 
        this['project_id'] = projectId;
        this['asset_id'] = assetId;
    }
    public withProjectId(projectId: string): ExportFactorRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAssetId(assetId: string): ExportFactorRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withBody(body: CommRequestAssetExportParam): ExportFactorRequest {
        this['body'] = body;
        return this;
    }
}