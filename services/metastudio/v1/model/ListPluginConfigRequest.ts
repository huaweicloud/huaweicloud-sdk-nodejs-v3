

export class ListPluginConfigRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    private 'plugin_provider'?: ListPluginConfigRequestPluginProviderEnum | string;
    private 'plugin_type'?: ListPluginConfigRequestPluginTypeEnum | string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListPluginConfigRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListPluginConfigRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListPluginConfigRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ListPluginConfigRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): ListPluginConfigRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPluginConfigRequest {
        this['limit'] = limit;
        return this;
    }
    public withPluginProvider(pluginProvider: ListPluginConfigRequestPluginProviderEnum | string): ListPluginConfigRequest {
        this['plugin_provider'] = pluginProvider;
        return this;
    }
    public set pluginProvider(pluginProvider: ListPluginConfigRequestPluginProviderEnum | string  | undefined) {
        this['plugin_provider'] = pluginProvider;
    }
    public get pluginProvider(): ListPluginConfigRequestPluginProviderEnum | string | undefined {
        return this['plugin_provider'];
    }
    public withPluginType(pluginType: ListPluginConfigRequestPluginTypeEnum | string): ListPluginConfigRequest {
        this['plugin_type'] = pluginType;
        return this;
    }
    public set pluginType(pluginType: ListPluginConfigRequestPluginTypeEnum | string  | undefined) {
        this['plugin_type'] = pluginType;
    }
    public get pluginType(): ListPluginConfigRequestPluginTypeEnum | string | undefined {
        return this['plugin_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPluginConfigRequestPluginProviderEnum {
    BOCHA = 'BOCHA',
    AMAP_WEATHER = 'AMAP_WEATHER'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPluginConfigRequestPluginTypeEnum {
    WEATHER_QUERY = 'WEATHER_QUERY',
    WEB_SEARCH = 'WEB_SEARCH'
}
