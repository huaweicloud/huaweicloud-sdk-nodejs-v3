import { DownloadAssetFileRequestBody } from './DownloadAssetFileRequestBody';


export class DownloadAssetFileRequest {
    private 'enterprise_project_id'?: string;
    private 'asset_type'?: string;
    public category?: string;
    public body?: DownloadAssetFileRequestBody;
    public constructor(assetType?: string, category?: string) { 
        this['asset_type'] = assetType;
        this['category'] = category;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DownloadAssetFileRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAssetType(assetType: string): DownloadAssetFileRequest {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): string | undefined {
        return this['asset_type'];
    }
    public withCategory(category: string): DownloadAssetFileRequest {
        this['category'] = category;
        return this;
    }
    public withBody(body: DownloadAssetFileRequestBody): DownloadAssetFileRequest {
        this['body'] = body;
        return this;
    }
}