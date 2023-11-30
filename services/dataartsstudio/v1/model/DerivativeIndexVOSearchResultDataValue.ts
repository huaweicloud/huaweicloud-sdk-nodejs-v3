import { DerivativeIndexVO } from './DerivativeIndexVO';


export class DerivativeIndexVOSearchResultDataValue {
    public records?: Array<DerivativeIndexVO>;
    public total?: number;
    public constructor() { 
    }
    public withRecords(records: Array<DerivativeIndexVO>): DerivativeIndexVOSearchResultDataValue {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): DerivativeIndexVOSearchResultDataValue {
        this['total'] = total;
        return this;
    }
}