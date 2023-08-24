

export class ListAssetsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-App-UserId'?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    public tag?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'asset_type'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'asset_source'?: ListAssetsRequestAssetSourceEnum | string;
    private 'asset_manage_type'?: ListAssetsRequestAssetManageTypeEnum | string;
    private 'asset_state'?: string;
    private 'style_id'?: string;
    private 'X-User-MePrivilege'?: string;
    private 'render_engine'?: string;
    public sex?: string;
    public language?: string;
    private 'system_property'?: string;
    private 'action_editable'?: boolean;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListAssetsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListAssetsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXAppUserId(xAppUserId: string): ListAssetsRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withLimit(limit: number): ListAssetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAssetsRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListAssetsRequest {
        this['name'] = name;
        return this;
    }
    public withTag(tag: string): ListAssetsRequest {
        this['tag'] = tag;
        return this;
    }
    public withStartTime(startTime: string): ListAssetsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListAssetsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withAssetType(assetType: string): ListAssetsRequest {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): string | undefined {
        return this['asset_type'];
    }
    public withSortKey(sortKey: string): ListAssetsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListAssetsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withAssetSource(assetSource: ListAssetsRequestAssetSourceEnum | string): ListAssetsRequest {
        this['asset_source'] = assetSource;
        return this;
    }
    public set assetSource(assetSource: ListAssetsRequestAssetSourceEnum | string  | undefined) {
        this['asset_source'] = assetSource;
    }
    public get assetSource(): ListAssetsRequestAssetSourceEnum | string | undefined {
        return this['asset_source'];
    }
    public withAssetManageType(assetManageType: ListAssetsRequestAssetManageTypeEnum | string): ListAssetsRequest {
        this['asset_manage_type'] = assetManageType;
        return this;
    }
    public set assetManageType(assetManageType: ListAssetsRequestAssetManageTypeEnum | string  | undefined) {
        this['asset_manage_type'] = assetManageType;
    }
    public get assetManageType(): ListAssetsRequestAssetManageTypeEnum | string | undefined {
        return this['asset_manage_type'];
    }
    public withAssetState(assetState: string): ListAssetsRequest {
        this['asset_state'] = assetState;
        return this;
    }
    public set assetState(assetState: string  | undefined) {
        this['asset_state'] = assetState;
    }
    public get assetState(): string | undefined {
        return this['asset_state'];
    }
    public withStyleId(styleId: string): ListAssetsRequest {
        this['style_id'] = styleId;
        return this;
    }
    public set styleId(styleId: string  | undefined) {
        this['style_id'] = styleId;
    }
    public get styleId(): string | undefined {
        return this['style_id'];
    }
    public withXUserMePrivilege(xUserMePrivilege: string): ListAssetsRequest {
        this['X-User-MePrivilege'] = xUserMePrivilege;
        return this;
    }
    public set xUserMePrivilege(xUserMePrivilege: string  | undefined) {
        this['X-User-MePrivilege'] = xUserMePrivilege;
    }
    public get xUserMePrivilege(): string | undefined {
        return this['X-User-MePrivilege'];
    }
    public withRenderEngine(renderEngine: string): ListAssetsRequest {
        this['render_engine'] = renderEngine;
        return this;
    }
    public set renderEngine(renderEngine: string  | undefined) {
        this['render_engine'] = renderEngine;
    }
    public get renderEngine(): string | undefined {
        return this['render_engine'];
    }
    public withSex(sex: string): ListAssetsRequest {
        this['sex'] = sex;
        return this;
    }
    public withLanguage(language: string): ListAssetsRequest {
        this['language'] = language;
        return this;
    }
    public withSystemProperty(systemProperty: string): ListAssetsRequest {
        this['system_property'] = systemProperty;
        return this;
    }
    public set systemProperty(systemProperty: string  | undefined) {
        this['system_property'] = systemProperty;
    }
    public get systemProperty(): string | undefined {
        return this['system_property'];
    }
    public withActionEditable(actionEditable: boolean): ListAssetsRequest {
        this['action_editable'] = actionEditable;
        return this;
    }
    public set actionEditable(actionEditable: boolean  | undefined) {
        this['action_editable'] = actionEditable;
    }
    public get actionEditable(): boolean | undefined {
        return this['action_editable'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAssetsRequestAssetSourceEnum {
    SYSTEM = 'SYSTEM',
    CUSTOMIZATION = 'CUSTOMIZATION',
    ALL = 'ALL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAssetsRequestAssetManageTypeEnum {
    UPLOAD = 'UPLOAD',
    UPLOADED = 'UPLOADED',
    UPLOADING = 'UPLOADING',
    UPLOAD_FAILED = 'UPLOAD_FAILED',
    DOWNLOAD = 'DOWNLOAD',
    COLLECTIO = 'COLLECTIO',
    DRAFT = 'DRAFT',
    RECYCLE = 'RECYCLE'
}
