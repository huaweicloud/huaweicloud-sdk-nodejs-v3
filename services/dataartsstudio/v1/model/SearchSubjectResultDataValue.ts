import { CatalogVO } from './CatalogVO';


export class SearchSubjectResultDataValue {
    public total?: number;
    public records?: Array<CatalogVO>;
    public constructor() { 
    }
    public withTotal(total: number): SearchSubjectResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<CatalogVO>): SearchSubjectResultDataValue {
        this['records'] = records;
        return this;
    }
}