

export class ListPackageProductsRequest {
    public locale?: ListPackageProductsRequestLocaleEnum | string;
    public constructor() { 
    }
    public withLocale(locale: ListPackageProductsRequestLocaleEnum | string): ListPackageProductsRequest {
        this['locale'] = locale;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPackageProductsRequestLocaleEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
