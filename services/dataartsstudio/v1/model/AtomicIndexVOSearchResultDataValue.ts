import { AtomicIndexVO } from './AtomicIndexVO';


export class AtomicIndexVOSearchResultDataValue {
    public records?: Array<AtomicIndexVO>;
    public total?: number;
    public constructor() { 
    }
    public withRecords(records: Array<AtomicIndexVO>): AtomicIndexVOSearchResultDataValue {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): AtomicIndexVOSearchResultDataValue {
        this['total'] = total;
        return this;
    }
}