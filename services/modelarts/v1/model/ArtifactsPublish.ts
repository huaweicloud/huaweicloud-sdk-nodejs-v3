

export class ArtifactsPublish {
    private 'is_ckpt'?: boolean;
    private 'artifact_id'?: string;
    private 'asset_name'?: string;
    public visibility?: string;
    public description?: string;
    private 'publish_asset_type'?: string;
    private 'asset_source_type'?: string;
    private 'asset_code'?: string;
    private 'asset_version'?: string;
    private 'version_description'?: string;
    public constructor() { 
    }
    public withIsCkpt(isCkpt: boolean): ArtifactsPublish {
        this['is_ckpt'] = isCkpt;
        return this;
    }
    public set isCkpt(isCkpt: boolean  | undefined) {
        this['is_ckpt'] = isCkpt;
    }
    public get isCkpt(): boolean | undefined {
        return this['is_ckpt'];
    }
    public withArtifactId(artifactId: string): ArtifactsPublish {
        this['artifact_id'] = artifactId;
        return this;
    }
    public set artifactId(artifactId: string  | undefined) {
        this['artifact_id'] = artifactId;
    }
    public get artifactId(): string | undefined {
        return this['artifact_id'];
    }
    public withAssetName(assetName: string): ArtifactsPublish {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withVisibility(visibility: string): ArtifactsPublish {
        this['visibility'] = visibility;
        return this;
    }
    public withDescription(description: string): ArtifactsPublish {
        this['description'] = description;
        return this;
    }
    public withPublishAssetType(publishAssetType: string): ArtifactsPublish {
        this['publish_asset_type'] = publishAssetType;
        return this;
    }
    public set publishAssetType(publishAssetType: string  | undefined) {
        this['publish_asset_type'] = publishAssetType;
    }
    public get publishAssetType(): string | undefined {
        return this['publish_asset_type'];
    }
    public withAssetSourceType(assetSourceType: string): ArtifactsPublish {
        this['asset_source_type'] = assetSourceType;
        return this;
    }
    public set assetSourceType(assetSourceType: string  | undefined) {
        this['asset_source_type'] = assetSourceType;
    }
    public get assetSourceType(): string | undefined {
        return this['asset_source_type'];
    }
    public withAssetCode(assetCode: string): ArtifactsPublish {
        this['asset_code'] = assetCode;
        return this;
    }
    public set assetCode(assetCode: string  | undefined) {
        this['asset_code'] = assetCode;
    }
    public get assetCode(): string | undefined {
        return this['asset_code'];
    }
    public withAssetVersion(assetVersion: string): ArtifactsPublish {
        this['asset_version'] = assetVersion;
        return this;
    }
    public set assetVersion(assetVersion: string  | undefined) {
        this['asset_version'] = assetVersion;
    }
    public get assetVersion(): string | undefined {
        return this['asset_version'];
    }
    public withVersionDescription(versionDescription: string): ArtifactsPublish {
        this['version_description'] = versionDescription;
        return this;
    }
    public set versionDescription(versionDescription: string  | undefined) {
        this['version_description'] = versionDescription;
    }
    public get versionDescription(): string | undefined {
        return this['version_description'];
    }
}