

export class OriginHostBody {
    private 'origin_host_type'?: OriginHostBodyOriginHostTypeEnum | string;
    private 'customize_domain'?: string;
    public constructor(originHostType?: string) { 
        this['origin_host_type'] = originHostType;
    }
    public withOriginHostType(originHostType: OriginHostBodyOriginHostTypeEnum | string): OriginHostBody {
        this['origin_host_type'] = originHostType;
        return this;
    }
    public set originHostType(originHostType: OriginHostBodyOriginHostTypeEnum | string  | undefined) {
        this['origin_host_type'] = originHostType;
    }
    public get originHostType(): OriginHostBodyOriginHostTypeEnum | string | undefined {
        return this['origin_host_type'];
    }
    public withCustomizeDomain(customizeDomain: string): OriginHostBody {
        this['customize_domain'] = customizeDomain;
        return this;
    }
    public set customizeDomain(customizeDomain: string  | undefined) {
        this['customize_domain'] = customizeDomain;
    }
    public get customizeDomain(): string | undefined {
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
