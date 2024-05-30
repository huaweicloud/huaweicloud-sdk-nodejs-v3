import { CatalogVO } from './CatalogVO';


export class SearchSubjectNewResultDataValue {
    public total?: number;
    public records?: Array<CatalogVO>;
    public constructor() { 
    }
    public withTotal(total: number): SearchSubjectNewResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<CatalogVO>): SearchSubjectNewResultDataValue {
        this['records'] = records;
        return this;
    }
}