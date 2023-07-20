

export class ShowAssetMetaRequest {
    private 'X-Sdk-Date'?: string;
    private 'asset_id'?: Array<string>;
    public status?: Array<ShowAssetMetaRequestStatusEnum> | Array<string>;
    public transcodeStatus?: Array<ShowAssetMetaRequestTranscodeStatusEnum> | Array<string>;
    public assetStatus?: Array<ShowAssetMetaRequestAssetStatusEnum> | Array<string>;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'category_id'?: number;
    public tags?: string;
    private 'query_string'?: string;
    public page?: number;
    public size?: number;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): ShowAssetMetaRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withAssetId(assetId: Array<string>): ShowAssetMetaRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: Array<string>  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): Array<string> | undefined {
        return this['asset_id'];
    }
    public withStatus(status: Array<ShowAssetMetaRequestStatusEnum> | Array<string>): ShowAssetMetaRequest {
        this['status'] = status;
        return this;
    }
    public withTranscodeStatus(transcodeStatus: Array<ShowAssetMetaRequestTranscodeStatusEnum> | Array<string>): ShowAssetMetaRequest {
        this['transcodeStatus'] = transcodeStatus;
        return this;
    }
    public withAssetStatus(assetStatus: Array<ShowAssetMetaRequestAssetStatusEnum> | Array<string>): ShowAssetMetaRequest {
        this['assetStatus'] = assetStatus;
        return this;
    }
    public withStartTime(startTime: string): ShowAssetMetaRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowAssetMetaRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withCategoryId(categoryId: number): ShowAssetMetaRequest {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
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
    public set queryString(queryString: string  | undefined) {
        this['query_string'] = queryString;
    }
    public get queryString(): string | undefined {
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
