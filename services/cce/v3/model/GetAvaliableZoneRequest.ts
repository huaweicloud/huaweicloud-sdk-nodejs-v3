

export class GetAvaliableZoneRequest {
    private 'Content-Type'?: string;
    public locale?: GetAvaliableZoneRequestLocaleEnum | string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): GetAvaliableZoneRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLocale(locale: GetAvaliableZoneRequestLocaleEnum | string): GetAvaliableZoneRequest {
        this['locale'] = locale;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetAvaliableZoneRequestLocaleEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
