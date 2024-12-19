

export class ListFlavorsDetailsRequest {
    private 'X-Language'?: string;
    public version?: string;
    private 'spec_code'?: string;
    private 'ha_mode'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListFlavorsDetailsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withVersion(version: string): ListFlavorsDetailsRequest {
        this['version'] = version;
        return this;
    }
    public withSpecCode(specCode: string): ListFlavorsDetailsRequest {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withHaMode(haMode: string): ListFlavorsDetailsRequest {
        this['ha_mode'] = haMode;
        return this;
    }
    public set haMode(haMode: string  | undefined) {
        this['ha_mode'] = haMode;
    }
    public get haMode(): string | undefined {
        return this['ha_mode'];
    }
    public withLimit(limit: number): ListFlavorsDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFlavorsDetailsRequest {
        this['offset'] = offset;
        return this;
    }
}