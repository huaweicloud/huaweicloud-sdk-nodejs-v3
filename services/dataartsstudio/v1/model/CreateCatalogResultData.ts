import { BizCatalogVO } from './BizCatalogVO';


export class CreateCatalogResultData {
    public value?: BizCatalogVO;
    public constructor() { 
    }
    public withValue(value: BizCatalogVO): CreateCatalogResultData {
        this['value'] = value;
        return this;
    }
}