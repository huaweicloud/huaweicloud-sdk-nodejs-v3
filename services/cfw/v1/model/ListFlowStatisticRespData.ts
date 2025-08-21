import { FlowDetailsVO } from './FlowDetailsVO';


export class ListFlowStatisticRespData {
    public records?: Array<FlowDetailsVO>;
    public total?: number;
    public constructor() { 
    }
    public withRecords(records: Array<FlowDetailsVO>): ListFlowStatisticRespData {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): ListFlowStatisticRespData {
        this['total'] = total;
        return this;
    }
}