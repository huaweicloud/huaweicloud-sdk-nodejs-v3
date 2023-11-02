import { CatalogEntityVO } from './CatalogEntityVO';


export class CatalogParamsVO {
    public entity?: CatalogEntityVO;
    public constructor(entity?: CatalogEntityVO) { 
        this['entity'] = entity;
    }
    public withEntity(entity: CatalogEntityVO): CatalogParamsVO {
        this['entity'] = entity;
        return this;
    }
}