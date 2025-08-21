import { FlowTrendVO } from './FlowTrendVO';


export class ShowFlowTrendRespData {
    public records?: Array<FlowTrendVO>;
    public total?: number;
    public constructor() { 
    }
    public withRecords(records: Array<FlowTrendVO>): ShowFlowTrendRespData {
        this['records'] = records;
        return this;
    }
    public withTotal(total: number): ShowFlowTrendRespData {
        this['total'] = total;
        return this;
    }
}