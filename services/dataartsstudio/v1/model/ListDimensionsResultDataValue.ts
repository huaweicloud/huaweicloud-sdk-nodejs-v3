import { DimensionVO } from './DimensionVO';


export class ListDimensionsResultDataValue {
    public total?: number;
    public records?: Array<DimensionVO>;
    public constructor() { 
    }
    public withTotal(total: number): ListDimensionsResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<DimensionVO>): ListDimensionsResultDataValue {
        this['records'] = records;
        return this;
    }
}