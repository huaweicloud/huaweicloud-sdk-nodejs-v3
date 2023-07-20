

export class ShowGaussMySqlProjectQuotasRequest {
    private 'X-Language'?: string;
    public type?: ShowGaussMySqlProjectQuotasRequestTypeEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ShowGaussMySqlProjectQuotasRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withType(type: ShowGaussMySqlProjectQuotasRequestTypeEnum | string): ShowGaussMySqlProjectQuotasRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowGaussMySqlProjectQuotasRequestTypeEnum {
    INSTANCE = 'instance'
}
