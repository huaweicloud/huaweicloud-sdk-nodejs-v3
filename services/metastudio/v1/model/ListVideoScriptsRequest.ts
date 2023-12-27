

export class ListVideoScriptsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'script_catalog'?: ListVideoScriptsRequestScriptCatalogEnum | string;
    private 'view_mode'?: ListVideoScriptsRequestViewModeEnum | string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListVideoScriptsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListVideoScriptsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListVideoScriptsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ListVideoScriptsRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): ListVideoScriptsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListVideoScriptsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListVideoScriptsRequest {
        this['name'] = name;
        return this;
    }
    public withScriptCatalog(scriptCatalog: ListVideoScriptsRequestScriptCatalogEnum | string): ListVideoScriptsRequest {
        this['script_catalog'] = scriptCatalog;
        return this;
    }
    public set scriptCatalog(scriptCatalog: ListVideoScriptsRequestScriptCatalogEnum | string  | undefined) {
        this['script_catalog'] = scriptCatalog;
    }
    public get scriptCatalog(): ListVideoScriptsRequestScriptCatalogEnum | string | undefined {
        return this['script_catalog'];
    }
    public withViewMode(viewMode: ListVideoScriptsRequestViewModeEnum | string): ListVideoScriptsRequest {
        this['view_mode'] = viewMode;
        return this;
    }
    public set viewMode(viewMode: ListVideoScriptsRequestViewModeEnum | string  | undefined) {
        this['view_mode'] = viewMode;
    }
    public get viewMode(): ListVideoScriptsRequestViewModeEnum | string | undefined {
        return this['view_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListVideoScriptsRequestScriptCatalogEnum {
    VIDEO_DRAFT = 'VIDEO_DRAFT',
    SYSTEM_VIDEO_TEMPLET = 'SYSTEM_VIDEO_TEMPLET'
}
/**
    * @export
    * @enum {string}
    */
export enum ListVideoScriptsRequestViewModeEnum {
    LANDSCAPE = 'LANDSCAPE',
    VERTICAL = 'VERTICAL'
}
