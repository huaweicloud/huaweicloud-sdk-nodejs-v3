

export class ListSupabaseApplicationFlavorsRequest {
    private 'X-Language'?: ListSupabaseApplicationFlavorsRequestXLanguageEnum | string;
    public version?: string;
    private 'spec_code'?: string;
    private 'az_code'?: string;
    private 'is_free'?: boolean;
    public mode?: ListSupabaseApplicationFlavorsRequestModeEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListSupabaseApplicationFlavorsRequestXLanguageEnum | string): ListSupabaseApplicationFlavorsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSupabaseApplicationFlavorsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSupabaseApplicationFlavorsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withVersion(version: string): ListSupabaseApplicationFlavorsRequest {
        this['version'] = version;
        return this;
    }
    public withSpecCode(specCode: string): ListSupabaseApplicationFlavorsRequest {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withAzCode(azCode: string): ListSupabaseApplicationFlavorsRequest {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withIsFree(isFree: boolean): ListSupabaseApplicationFlavorsRequest {
        this['is_free'] = isFree;
        return this;
    }
    public set isFree(isFree: boolean  | undefined) {
        this['is_free'] = isFree;
    }
    public get isFree(): boolean | undefined {
        return this['is_free'];
    }
    public withMode(mode: ListSupabaseApplicationFlavorsRequestModeEnum | string): ListSupabaseApplicationFlavorsRequest {
        this['mode'] = mode;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSupabaseApplicationFlavorsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSupabaseApplicationFlavorsRequestModeEnum {
    SINGLE = 'Single'
}
