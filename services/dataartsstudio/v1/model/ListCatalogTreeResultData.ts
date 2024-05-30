import { BizCatalogVO } from './BizCatalogVO';


export class ListCatalogTreeResultData {
    public value?: Array<BizCatalogVO>;
    public constructor() { 
    }
    public withValue(value: Array<BizCatalogVO>): ListCatalogTreeResultData {
        this['value'] = value;
        return this;
    }
}