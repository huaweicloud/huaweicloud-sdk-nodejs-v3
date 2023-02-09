

export class RefreshTaskRequestBody {
    public type?: RefreshTaskRequestBodyTypeEnum;
    public urls: Array<string>;
    public constructor(urls?: any) { 
        this['urls'] = urls;
    }
    public withType(type: RefreshTaskRequestBodyTypeEnum): RefreshTaskRequestBody {
        this['type'] = type;
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
