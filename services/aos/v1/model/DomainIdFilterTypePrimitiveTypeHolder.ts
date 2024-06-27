

export class DomainIdFilterTypePrimitiveTypeHolder {
    private 'domain_id_filter_type'?: DomainIdFilterTypePrimitiveTypeHolderDomainIdFilterTypeEnum | string;
    public constructor() { 
    }
    public withDomainIdFilterType(domainIdFilterType: DomainIdFilterTypePrimitiveTypeHolderDomainIdFilterTypeEnum | string): DomainIdFilterTypePrimitiveTypeHolder {
        this['domain_id_filter_type'] = domainIdFilterType;
        return this;
    }
    public set domainIdFilterType(domainIdFilterType: DomainIdFilterTypePrimitiveTypeHolderDomainIdFilterTypeEnum | string  | undefined) {
        this['domain_id_filter_type'] = domainIdFilterType;
    }
    public get domainIdFilterType(): DomainIdFilterTypePrimitiveTypeHolderDomainIdFilterTypeEnum | string | undefined {
        return this['domain_id_filter_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DomainIdFilterTypePrimitiveTypeHolderDomainIdFilterTypeEnum {
    INTERSECTION = 'INTERSECTION',
    DIFFERENCE = 'DIFFERENCE',
    UNION = 'UNION',
    NONE = 'NONE'
}
