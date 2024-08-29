

export class ListAssetsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-App-UserId'?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    public tag?: string;
    private 'tag_combination_type'?: ListAssetsRequestTagCombinationTypeEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'asset_type'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'asset_source'?: ListAssetsRequestAssetSourceEnum | string;
    private 'asset_state'?: string;
    private 'style_id'?: string;
    private 'accurate_query_field'?: Array<string>;
    private 'render_engine'?: string;
    private 'asset_id'?: Array<string>;
    public sex?: string;
    public language?: string;
    private 'system_property'?: string;
    private 'action_editable'?: boolean;
    private 'is_with_action_library'?: boolean;
    private 'is_movable'?: boolean;
    private 'voice_provider'?: string;
    public role?: ListAssetsRequestRoleEnum | string;
    private 'is_realtime_voice'?: boolean;
    private 'human_model_2d_version'?: string;
    private 'include_device_name'?: string;
    private 'exclude_device_name'?: string;
    private 'supported_service'?: ListAssetsRequestSupportedServiceEnum | string;
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
    public withTagCombinationType(tagCombinationType: ListAssetsRequestTagCombinationTypeEnum | string): ListAssetsRequest {
        this['tag_combination_type'] = tagCombinationType;
        return this;
    }
    public set tagCombinationType(tagCombinationType: ListAssetsRequestTagCombinationTypeEnum | string  | undefined) {
        this['tag_combination_type'] = tagCombinationType;
    }
    public get tagCombinationType(): ListAssetsRequestTagCombinationTypeEnum | string | undefined {
        return this['tag_combination_type'];
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
    public withAccurateQueryField(accurateQueryField: Array<string>): ListAssetsRequest {
        this['accurate_query_field'] = accurateQueryField;
        return this;
    }
    public set accurateQueryField(accurateQueryField: Array<string>  | undefined) {
        this['accurate_query_field'] = accurateQueryField;
    }
    public get accurateQueryField(): Array<string> | undefined {
        return this['accurate_query_field'];
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
    public withAssetId(assetId: Array<string>): ListAssetsRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: Array<string>  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): Array<string> | undefined {
        return this['asset_id'];
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
    public withIsWithActionLibrary(isWithActionLibrary: boolean): ListAssetsRequest {
        this['is_with_action_library'] = isWithActionLibrary;
        return this;
    }
    public set isWithActionLibrary(isWithActionLibrary: boolean  | undefined) {
        this['is_with_action_library'] = isWithActionLibrary;
    }
    public get isWithActionLibrary(): boolean | undefined {
        return this['is_with_action_library'];
    }
    public withIsMovable(isMovable: boolean): ListAssetsRequest {
        this['is_movable'] = isMovable;
        return this;
    }
    public set isMovable(isMovable: boolean  | undefined) {
        this['is_movable'] = isMovable;
    }
    public get isMovable(): boolean | undefined {
        return this['is_movable'];
    }
    public withVoiceProvider(voiceProvider: string): ListAssetsRequest {
        this['voice_provider'] = voiceProvider;
        return this;
    }
    public set voiceProvider(voiceProvider: string  | undefined) {
        this['voice_provider'] = voiceProvider;
    }
    public get voiceProvider(): string | undefined {
        return this['voice_provider'];
    }
    public withRole(role: ListAssetsRequestRoleEnum | string): ListAssetsRequest {
        this['role'] = role;
        return this;
    }
    public withIsRealtimeVoice(isRealtimeVoice: boolean): ListAssetsRequest {
        this['is_realtime_voice'] = isRealtimeVoice;
        return this;
    }
    public set isRealtimeVoice(isRealtimeVoice: boolean  | undefined) {
        this['is_realtime_voice'] = isRealtimeVoice;
    }
    public get isRealtimeVoice(): boolean | undefined {
        return this['is_realtime_voice'];
    }
    public withHumanModel2dVersion(humanModel2dVersion: string): ListAssetsRequest {
        this['human_model_2d_version'] = humanModel2dVersion;
        return this;
    }
    public set humanModel2dVersion(humanModel2dVersion: string  | undefined) {
        this['human_model_2d_version'] = humanModel2dVersion;
    }
    public get humanModel2dVersion(): string | undefined {
        return this['human_model_2d_version'];
    }
    public withIncludeDeviceName(includeDeviceName: string): ListAssetsRequest {
        this['include_device_name'] = includeDeviceName;
        return this;
    }
    public set includeDeviceName(includeDeviceName: string  | undefined) {
        this['include_device_name'] = includeDeviceName;
    }
    public get includeDeviceName(): string | undefined {
        return this['include_device_name'];
    }
    public withExcludeDeviceName(excludeDeviceName: string): ListAssetsRequest {
        this['exclude_device_name'] = excludeDeviceName;
        return this;
    }
    public set excludeDeviceName(excludeDeviceName: string  | undefined) {
        this['exclude_device_name'] = excludeDeviceName;
    }
    public get excludeDeviceName(): string | undefined {
        return this['exclude_device_name'];
    }
    public withSupportedService(supportedService: ListAssetsRequestSupportedServiceEnum | string): ListAssetsRequest {
        this['supported_service'] = supportedService;
        return this;
    }
    public set supportedService(supportedService: ListAssetsRequestSupportedServiceEnum | string  | undefined) {
        this['supported_service'] = supportedService;
    }
    public get supportedService(): ListAssetsRequestSupportedServiceEnum | string | undefined {
        return this['supported_service'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAssetsRequestTagCombinationTypeEnum {
    INTERSECTION = 'INTERSECTION',
    UNION_SET = 'UNION_SET'
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
export enum ListAssetsRequestRoleEnum {
    SHARER = 'SHARER',
    SHAREE = 'SHAREE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAssetsRequestSupportedServiceEnum {
    VIDEO_2D = 'VIDEO_2D',
    LIVE_2D = 'LIVE_2D',
    CHAT_2D = 'CHAT_2D'
}
