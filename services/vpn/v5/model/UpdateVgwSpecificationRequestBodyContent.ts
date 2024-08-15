

export class UpdateVgwSpecificationRequestBodyContent {
    public flavor?: UpdateVgwSpecificationRequestBodyContentFlavorEnum | string;
    public constructor(flavor?: string) { 
        this['flavor'] = flavor;
    }
    public withFlavor(flavor: UpdateVgwSpecificationRequestBodyContentFlavorEnum | string): UpdateVgwSpecificationRequestBodyContent {
        this['flavor'] = flavor;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateVgwSpecificationRequestBodyContentFlavorEnum {
    BASIC = 'Basic',
    PROFESSIONAL1 = 'Professional1',
    PROFESSIONAL2 = 'Professional2',
    PROFESSIONAL1_NONFIXEDIP = 'Professional1-NonFixedIP',
    PROFESSIONAL2_NONFIXEDIP = 'Professional2-NonFixedIP'
}
