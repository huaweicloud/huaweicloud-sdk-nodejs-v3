import { CoverInfo } from './CoverInfo';


export class AssetSummary {
    private 'asset_id'?: string;
    public title?: string;
    public description?: string;
    public duration?: number;
    private 'duration_ms'?: number;
    public size?: number;
    private 'original_url'?: string;
    public category?: string;
    public covers?: Array<CoverInfo>;
    private 'create_time'?: string;
    private 'asset_status'?: AssetSummaryAssetStatusEnum | string;
    private 'transcode_status'?: AssetSummaryTranscodeStatusEnum | string;
    private 'thumbnail_status'?: AssetSummaryThumbnailStatusEnum | string;
    private 'review_status'?: AssetSummaryReviewStatusEnum | string;
    private 'exec_desc'?: string;
    private 'media_type'?: string;
    public constructor(assetId?: string, title?: string, duration?: number, size?: number, assetStatus?: string) { 
        this['asset_id'] = assetId;
        this['title'] = title;
        this['duration'] = duration;
        this['size'] = size;
        this['asset_status'] = assetStatus;
    }
    public withAssetId(assetId: string): AssetSummary {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withTitle(title: string): AssetSummary {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): AssetSummary {
        this['description'] = description;
        return this;
    }
    public withDuration(duration: number): AssetSummary {
        this['duration'] = duration;
        return this;
    }
    public withDurationMs(durationMs: number): AssetSummary {
        this['duration_ms'] = durationMs;
        return this;
    }
    public set durationMs(durationMs: number  | undefined) {
        this['duration_ms'] = durationMs;
    }
    public get durationMs(): number | undefined {
        return this['duration_ms'];
    }
    public withSize(size: number): AssetSummary {
        this['size'] = size;
        return this;
    }
    public withOriginalUrl(originalUrl: string): AssetSummary {
        this['original_url'] = originalUrl;
        return this;
    }
    public set originalUrl(originalUrl: string  | undefined) {
        this['original_url'] = originalUrl;
    }
    public get originalUrl(): string | undefined {
        return this['original_url'];
    }
    public withCategory(category: string): AssetSummary {
        this['category'] = category;
        return this;
    }
    public withCovers(covers: Array<CoverInfo>): AssetSummary {
        this['covers'] = covers;
        return this;
    }
    public withCreateTime(createTime: string): AssetSummary {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withAssetStatus(assetStatus: AssetSummaryAssetStatusEnum | string): AssetSummary {
        this['asset_status'] = assetStatus;
        return this;
    }
    public set assetStatus(assetStatus: AssetSummaryAssetStatusEnum | string  | undefined) {
        this['asset_status'] = assetStatus;
    }
    public get assetStatus(): AssetSummaryAssetStatusEnum | string | undefined {
        return this['asset_status'];
    }
    public withTranscodeStatus(transcodeStatus: AssetSummaryTranscodeStatusEnum | string): AssetSummary {
        this['transcode_status'] = transcodeStatus;
        return this;
    }
    public set transcodeStatus(transcodeStatus: AssetSummaryTranscodeStatusEnum | string  | undefined) {
        this['transcode_status'] = transcodeStatus;
    }
    public get transcodeStatus(): AssetSummaryTranscodeStatusEnum | string | undefined {
        return this['transcode_status'];
    }
    public withThumbnailStatus(thumbnailStatus: AssetSummaryThumbnailStatusEnum | string): AssetSummary {
        this['thumbnail_status'] = thumbnailStatus;
        return this;
    }
    public set thumbnailStatus(thumbnailStatus: AssetSummaryThumbnailStatusEnum | string  | undefined) {
        this['thumbnail_status'] = thumbnailStatus;
    }
    public get thumbnailStatus(): AssetSummaryThumbnailStatusEnum | string | undefined {
        return this['thumbnail_status'];
    }
    public withReviewStatus(reviewStatus: AssetSummaryReviewStatusEnum | string): AssetSummary {
        this['review_status'] = reviewStatus;
        return this;
    }
    public set reviewStatus(reviewStatus: AssetSummaryReviewStatusEnum | string  | undefined) {
        this['review_status'] = reviewStatus;
    }
    public get reviewStatus(): AssetSummaryReviewStatusEnum | string | undefined {
        return this['review_status'];
    }
    public withExecDesc(execDesc: string): AssetSummary {
        this['exec_desc'] = execDesc;
        return this;
    }
    public set execDesc(execDesc: string  | undefined) {
        this['exec_desc'] = execDesc;
    }
    public get execDesc(): string | undefined {
        return this['exec_desc'];
    }
    public withMediaType(mediaType: string): AssetSummary {
        this['media_type'] = mediaType;
        return this;
    }
    public set mediaType(mediaType: string  | undefined) {
        this['media_type'] = mediaType;
    }
    public get mediaType(): string | undefined {
        return this['media_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AssetSummaryAssetStatusEnum {
    CREATING = 'CREATING',
    FAILED = 'FAILED',
    CREATED = 'CREATED',
    PUBLISHED = 'PUBLISHED',
    DELETED = 'DELETED'
}
/**
    * @export
    * @enum {string}
    */
export enum AssetSummaryTranscodeStatusEnum {
    UN_TRANSCODE = 'UN_TRANSCODE',
    WAITING_TRANSCODE = 'WAITING_TRANSCODE',
    TRANSCODING = 'TRANSCODING',
    TRANSCODE_SUCCEED = 'TRANSCODE_SUCCEED',
    TRANSCODE_FAILED = 'TRANSCODE_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum AssetSummaryThumbnailStatusEnum {
    UN_THUMBNAIL = 'UN_THUMBNAIL',
    THUMBNAILING = 'THUMBNAILING',
    THUMBNAIL_SUCCEED = 'THUMBNAIL_SUCCEED',
    THUMBNAIL_FAILED = 'THUMBNAIL_FAILED'
}
/**
    * @export
    * @enum {string}
    */
export enum AssetSummaryReviewStatusEnum {
    UN_REVIEW = 'UN_REVIEW',
    REVIEWING = 'REVIEWING',
    REVIEW_SUSPICIOUS = 'REVIEW_SUSPICIOUS',
    REVIEW_PASSED = 'REVIEW_PASSED',
    REVIEW_FAILED = 'REVIEW_FAILED',
    REVIEW_BLOCKED = 'REVIEW_BLOCKED'
}
