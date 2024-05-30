import { BizMetricVO } from './BizMetricVO';


export class ListBizMetricsResultDataValue {
    public total?: number;
    public records?: Array<BizMetricVO>;
    public constructor() { 
    }
    public withTotal(total: number): ListBizMetricsResultDataValue {
        this['total'] = total;
        return this;
    }
    public withRecords(records: Array<BizMetricVO>): ListBizMetricsResultDataValue {
        this['records'] = records;
        return this;
    }
}