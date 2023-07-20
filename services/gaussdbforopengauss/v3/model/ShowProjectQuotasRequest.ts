

export class ShowProjectQuotasRequest {
    private 'X-Language'?: string;
    public type?: ShowProjectQuotasRequestTypeEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ShowProjectQuotasRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withType(type: ShowProjectQuotasRequestTypeEnum | string): ShowProjectQuotasRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowProjectQuotasRequestTypeEnum {
    INSTANCE = 'instance'
}
