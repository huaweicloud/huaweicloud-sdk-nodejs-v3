

export class RefreshTaskRequestBody {
    public type?: RefreshTaskRequestBodyTypeEnum | string;
    public mode?: RefreshTaskRequestBodyModeEnum | string;
    private 'zh_url_encode'?: boolean;
    public urls?: Array<string>;
    public constructor(urls?: Array<string>) { 
        this['urls'] = urls;
    }
    public withType(type: RefreshTaskRequestBodyTypeEnum | string): RefreshTaskRequestBody {
        this['type'] = type;
        return this;
    }
    public withMode(mode: RefreshTaskRequestBodyModeEnum | string): RefreshTaskRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withZhUrlEncode(zhUrlEncode: boolean): RefreshTaskRequestBody {
        this['zh_url_encode'] = zhUrlEncode;
        return this;
    }
    public set zhUrlEncode(zhUrlEncode: boolean  | undefined) {
        this['zh_url_encode'] = zhUrlEncode;
    }
    public get zhUrlEncode(): boolean | undefined {
        return this['zh_url_encode'];
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
