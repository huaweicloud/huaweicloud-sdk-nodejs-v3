

export class ShowAssetMetaRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'asset_id'?: Array<string> | undefined;
    public status?: Array<ShowAssetMetaRequestStatusEnum>;
    public transcodeStatus?: Array<ShowAssetMetaRequestTranscodeStatusEnum>;
    public assetStatus?: Array<ShowAssetMetaRequestAssetStatusEnum>;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'category_id'?: number | undefined;
    public tags?: string;
    private 'query_string'?: string | undefined;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ShowAssetMetaRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowAssetMetaRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withAssetId(assetId: Array<string>): ShowAssetMetaRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: Array<string> | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
    public withStatus(status: Array<ShowAssetMetaRequestStatusEnum>): ShowAssetMetaRequest {
        this['status'] = status;
        return this;
    }
    public withTranscodeStatus(transcodeStatus: Array<ShowAssetMetaRequestTranscodeStatusEnum>): ShowAssetMetaRequest {
        this['transcodeStatus'] = transcodeStatus;
        return this;
    }
    public withAssetStatus(assetStatus: Array<ShowAssetMetaRequestAssetStatusEnum>): ShowAssetMetaRequest {
        this['assetStatus'] = assetStatus;
        return this;
    }
    public withStartTime(startTime: string): ShowAssetMetaRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowAssetMetaRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withCategoryId(categoryId: number): ShowAssetMetaRequest {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId() {
        return this['category_id'];
    }
    public withTags(tags: string): ShowAssetMetaRequest {
        this['tags'] = tags;
        return this;
    }
    public withQueryString(queryString: string): ShowAssetMetaRequest {
        this['query_string'] = queryString;
        return this;
    }
    public set queryString(queryString: string | undefined) {
        this['query_string'] = queryString;
    }
    public get queryString() {
        return this['query_string'];
    }
    public withPage(page: number): ShowAssetMetaRequest {
        this['page'] = page;
        return this;
    }
    public withSize(size: number): ShowAssetMetaRequest {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAssetMetaRequestStatusEnum {
    UNCREATED = 'UNCREATED',
    DELETED = 'DELETED',
    CANCELLED = 'CANCELLED',
    SERVER_ERROR = 'SERVER_ERROR',
    UPLOAD_FAILED = 'UPLOAD_FAILED',
    CREATING = 'CREATING',
    PUBLISHED = 'PUBLISHED',
    WAITING_TRANSCODE = 'WAITING_TRANSCODE',
    TRANSCODING = 'TRANSCODING',
    TRANSCODE_FAILED = 'TRANSCODE_FAILED',
    TRANSCODE_SUCCEED = 'TRANSCODE_SUCCEED',
    CREATED = 'CREATED'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAssetMetaRequestTranscodeStatusEnum {
    TRANSCODING = 'TRANSCODING',
    TRANSCODE_FAILED = 'TRANSCODE_FAILED',
    TRANSCODE_SUCCEED = 'TRANSCODE_SUCCEED',
    UN_TRANSCODE = 'UN_TRANSCODE',
    WAITING_TRANSCODE = 'WAITING_TRANSCODE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAssetMetaRequestAssetStatusEnum {
    PUBLISHED = 'PUBLISHED',
    CREATED = 'CREATED'
}
