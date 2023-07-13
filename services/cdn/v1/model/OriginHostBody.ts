

export class OriginHostBody {
    private 'origin_host_type': OriginHostBodyOriginHostTypeEnum | undefined;
    private 'customize_domain'?: string | undefined;
    public constructor(originHostType?: any) { 
        this['origin_host_type'] = originHostType;
    }
    public withOriginHostType(originHostType: OriginHostBodyOriginHostTypeEnum): OriginHostBody {
        this['origin_host_type'] = originHostType;
        return this;
    }
    public set originHostType(originHostType: OriginHostBodyOriginHostTypeEnum | undefined) {
        this['origin_host_type'] = originHostType;
    }
    public get originHostType() {
        return this['origin_host_type'];
    }
    public withCustomizeDomain(customizeDomain: string): OriginHostBody {
        this['customize_domain'] = customizeDomain;
        return this;
    }
    public set customizeDomain(customizeDomain: string | undefined) {
        this['customize_domain'] = customizeDomain;
    }
    public get customizeDomain() {
        return this['customize_domain'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OriginHostBodyOriginHostTypeEnum {
    ACCELERATE = 'accelerate',
    CUSTOMIZE = 'customize'
}
