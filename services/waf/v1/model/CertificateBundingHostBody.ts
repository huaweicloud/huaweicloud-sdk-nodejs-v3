

export class CertificateBundingHostBody {
    public id?: string;
    public hostname?: string;
    private 'waf_type'?: CertificateBundingHostBodyWafTypeEnum | undefined;
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
    public withWafType(wafType: CertificateBundingHostBodyWafTypeEnum): CertificateBundingHostBody {
        this['waf_type'] = wafType;
        return this;
    }
    public set wafType(wafType: CertificateBundingHostBodyWafTypeEnum | undefined) {
        this['waf_type'] = wafType;
    }
    public get wafType() {
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
