

export class ListSupportKernelPluginsRequest {
    private 'X-Language'?: ListSupportKernelPluginsRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListSupportKernelPluginsRequestXLanguageEnum | string): ListSupportKernelPluginsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSupportKernelPluginsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSupportKernelPluginsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSupportKernelPluginsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
