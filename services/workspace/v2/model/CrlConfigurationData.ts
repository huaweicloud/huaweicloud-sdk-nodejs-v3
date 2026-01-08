

export class CrlConfigurationData {
    public enable?: boolean;
    public type?: CrlConfigurationDataTypeEnum | string;
    private 'crl_url'?: string;
    private 'valid_day'?: number;
    public constructor(enable?: boolean, type?: string, validDay?: number) { 
        this['enable'] = enable;
        this['type'] = type;
        this['valid_day'] = validDay;
    }
    public withEnable(enable: boolean): CrlConfigurationData {
        this['enable'] = enable;
        return this;
    }
    public withType(type: CrlConfigurationDataTypeEnum | string): CrlConfigurationData {
        this['type'] = type;
        return this;
    }
    public withCrlUrl(crlUrl: string): CrlConfigurationData {
        this['crl_url'] = crlUrl;
        return this;
    }
    public set crlUrl(crlUrl: string  | undefined) {
        this['crl_url'] = crlUrl;
    }
    public get crlUrl(): string | undefined {
        return this['crl_url'];
    }
    public withValidDay(validDay: number): CrlConfigurationData {
        this['valid_day'] = validDay;
        return this;
    }
    public set validDay(validDay: number  | undefined) {
        this['valid_day'] = validDay;
    }
    public get validDay(): number | undefined {
        return this['valid_day'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CrlConfigurationDataTypeEnum {
    SYSTEM = 'SYSTEM',
    CUSTOMIZE = 'CUSTOMIZE'
}
