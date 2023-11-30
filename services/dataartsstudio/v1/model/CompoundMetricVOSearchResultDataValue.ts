import { CompoundMetricVO } from './CompoundMetricVO';


export class CompoundMetricVOSearchResultDataValue {
    public records?: Array<CompoundMetricVO>;
    public total?: number;
    public constructor() { 
    }
    public withRecords(records: Array<CompoundMetricVO>): CompoundMetricVOSearchResultDataValue {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): CompoundMetricVOSearchResultDataValue {
        this['total'] = total;
        return this;
    }
}