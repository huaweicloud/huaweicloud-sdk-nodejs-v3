import { CatalogAttributeVO } from './CatalogAttributeVO';


export class CatalogEntityVO {
    public typeName?: string;
    public attributes?: CatalogAttributeVO;
    public constructor(attributes?: CatalogAttributeVO) { 
        this['attributes'] = attributes;
    }
    public withTypeName(typeName: string): CatalogEntityVO {
        this['typeName'] = typeName;
        return this;
    }
    public withAttributes(attributes: CatalogAttributeVO): CatalogEntityVO {
        this['attributes'] = attributes;
        return this;
    }
}