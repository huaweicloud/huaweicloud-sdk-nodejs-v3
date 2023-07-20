

export class CertificateBundingHostBody {
    public id?: string;
    public hostname?: string;
    private 'waf_type'?: CertificateBundingHostBodyWafTypeEnum | string;
    public constructor() { 
    }
    public withId(id: string): CertificateBundingHostBody {
        this['id'] = id;
        return this;
    }
    public withHostname(hostname: string): CertificateBundingHostBody {
        this['hostname'] = hostname;
        return this;
    }
    public withWafType(wafType: CertificateBundingHostBodyWafTypeEnum | string): CertificateBundingHostBody {
        this['waf_type'] = wafType;
        return this;
    }
    public set wafType(wafType: CertificateBundingHostBodyWafTypeEnum | string  | undefined) {
        this['waf_type'] = wafType;
    }
    public get wafType(): CertificateBundingHostBodyWafTypeEnum | string | undefined {
        return this['waf_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CertificateBundingHostBodyWafTypeEnum {
    CLOUD = 'cloud',
    PREMIUM = 'premium'
}
