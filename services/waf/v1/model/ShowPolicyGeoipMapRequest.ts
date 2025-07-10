

export class ShowPolicyGeoipMapRequest {
    private 'Content-Type'?: string;
    public lang?: ShowPolicyGeoipMapRequestLangEnum | string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ShowPolicyGeoipMapRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLang(lang: ShowPolicyGeoipMapRequestLangEnum | string): ShowPolicyGeoipMapRequest {
        this['lang'] = lang;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPolicyGeoipMapRequestLangEnum {
    CN = 'cn',
    EN = 'en'
}
