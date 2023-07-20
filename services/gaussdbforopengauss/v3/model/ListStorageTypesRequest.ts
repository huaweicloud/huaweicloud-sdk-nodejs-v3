

export class ListStorageTypesRequest {
    private 'X-Language'?: string;
    public version?: string;
    private 'ha_mode'?: ListStorageTypesRequestHaModeEnum | string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withXLanguage(xLanguage: string): ListStorageTypesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withVersion(version: string): ListStorageTypesRequest {
        this['version'] = version;
        return this;
    }
    public withHaMode(haMode: ListStorageTypesRequestHaModeEnum | string): ListStorageTypesRequest {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: ListStorageTypesRequestHaModeEnum | string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): ListStorageTypesRequestHaModeEnum | string | undefined {
        return this['ha_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListStorageTypesRequestHaModeEnum {
    ENTERPRISE = 'enterprise',
    CENTRALIZATION_STANDARD = 'centralization_standard'
}
