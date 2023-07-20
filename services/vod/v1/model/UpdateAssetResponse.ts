
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAssetResponse extends SdkResponse {
    private 'asset_id'?: string;
    private 'video_upload_url'?: string;
    private 'cover_upload_url'?: string;
    private 'subtitle_upload_urls'?: Array<string>;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): UpdateAssetResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withVideoUploadUrl(videoUploadUrl: string): UpdateAssetResponse {
        this['video_upload_url'] = videoUploadUrl;
        return this;
    }
    public set videoUploadUrl(videoUploadUrl: string  | undefined) {
        this['video_upload_url'] = videoUploadUrl;
    }
    public get videoUploadUrl(): string | undefined {
        return this['video_upload_url'];
    }
    public withCoverUploadUrl(coverUploadUrl: string): UpdateAssetResponse {
        this['cover_upload_url'] = coverUploadUrl;
        return this;
    }
    public set coverUploadUrl(coverUploadUrl: string  | undefined) {
        this['cover_upload_url'] = coverUploadUrl;
    }
    public get coverUploadUrl(): string | undefined {
        return this['cover_upload_url'];
    }
    public withSubtitleUploadUrls(subtitleUploadUrls: Array<string>): UpdateAssetResponse {
        this['subtitle_upload_urls'] = subtitleUploadUrls;
        return this;
    }
    public set subtitleUploadUrls(subtitleUploadUrls: Array<string>  | undefined) {
        this['subtitle_upload_urls'] = subtitleUploadUrls;
    }
    public get subtitleUploadUrls(): Array<string> | undefined {
        return this['subtitle_upload_urls'];
    }
}