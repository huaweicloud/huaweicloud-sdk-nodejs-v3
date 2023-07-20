

export class ListAssetListRequest {
    private 'X-Sdk-Date'?: string;
    private 'asset_id'?: Array<string>;
    public status?: Array<ListAssetListRequestStatusEnum> | Array<string>;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'category_id'?: number;
    public tags?: string;
    private 'query_string'?: string;
    private 'media_type'?: Array<string>;
    public page?: number;
    public size?: number;
    public order?: ListAssetListRequestOrderEnum | string;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): ListAssetListRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withAssetId(assetId: Array<string>): ListAssetListRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: Array<string>  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): Array<string> | undefined {
        return this['asset_id'];
    }
    public withStatus(status: Array<ListAssetListRequestStatusEnum> | Array<string>): ListAssetListRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListAssetListRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAssetListRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCategoryId(categoryId: number): ListAssetListRequest {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withTags(tags: string): ListAssetListRequest {
        this['tags'] = tags;
        return this;
    }
    public withQueryString(queryString: string): ListAssetListRequest {
        this['query_string'] = queryString;
        return this;
    }
    public set queryString(queryString: string  | undefined) {
        this['query_string'] = queryString;
    }
    public get queryString(): string | undefined {
        return this['query_string'];
    }
    public withMediaType(mediaType: Array<string>): ListAssetListRequest {
        this['media_type'] = mediaType;
        return this;
    }
    public set mediaType(mediaType: Array<string>  | undefined) {
        this['media_type'] = mediaType;
    }
    public get mediaType(): Array<string> | undefined {
        return this['media_type'];
    }
    public withPage(page: number): ListAssetListRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ListAssetListRequest {
        this['size'] = size;
        return this;
    }
    public withOrder(order: ListAssetListRequestOrderEnum | string): ListAssetListRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAssetListRequestStatusEnum {
    CREATING = 'CREATING',
    FAILED = 'FAILED',
    CREATED = 'CREATED',
    PUBLISHED = 'PUBLISHED',
    WAITING_TRANSCODE = 'WAITING_TRANSCODE',
    TRANSCODING = 'TRANSCODING',
    TRANSCODE_SUCCEED = 'TRANSCODE_SUCCEED',
    TRANSCODE_FAILED = 'TRANSCODE_FAILED',
    THUMBNAILING = 'THUMBNAILING',
    THUMBNAIL_SUCCEED = 'THUMBNAIL_SUCCEED',
    THUMBNAIL_FAILED = 'THUMBNAIL_FAILED',
    UN_REVIEW = 'UN_REVIEW',
    REVIEWING = 'REVIEWING',
    REVIEW_SUSPICIOUS = 'REVIEW_SUSPICIOUS',
    REVIEW_PASSED = 'REVIEW_PASSED',
    REVIEW_FAILED = 'REVIEW_FAILED',
    REVIEW_BLOCKED = 'REVIEW_BLOCKED'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAssetListRequestOrderEnum {
    ASC = 'asc',
    DESC = 'desc'
}
