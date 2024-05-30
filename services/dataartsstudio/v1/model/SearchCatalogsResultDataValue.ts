import { BizCatalogVO } from './BizCatalogVO';


export class SearchCatalogsResultDataValue {
    public total?: number;
    public records?: Array<BizCatalogVO>;
    public constructor() { 
    }
    public withTotal(total: number): SearchCatalogsResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<BizCatalogVO>): SearchCatalogsResultDataValue {
        this['records'] = records;
        return this;
    }
}