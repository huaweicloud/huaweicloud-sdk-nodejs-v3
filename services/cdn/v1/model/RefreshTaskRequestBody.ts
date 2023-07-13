

export class RefreshTaskRequestBody {
    public type?: RefreshTaskRequestBodyTypeEnum;
    public mode?: RefreshTaskRequestBodyModeEnum;
    public urls: Array<string>;
    public constructor(urls?: any) { 
        this['urls'] = urls;
    }
    public withType(type: RefreshTaskRequestBodyTypeEnum): RefreshTaskRequestBody {
        this['type'] = type;
        return this;
    }
    public withMode(mode: RefreshTaskRequestBodyModeEnum): RefreshTaskRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withUrls(urls: Array<string>): RefreshTaskRequestBody {
        this['urls'] = urls;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RefreshTaskRequestBodyTypeEnum {
    FILE = 'file',
    DIRECTORY = 'directory'
}
/**
    * @export
    * @enum {string}
    */
export enum RefreshTaskRequestBodyModeEnum {
    ALL = 'all',
    DETECT_MODIFY_REFRESH = 'detect_modify_refresh'
}
