import { WorkloadStatistics } from './WorkloadStatistics';


export class WorkloadListStatisticsStatistics {
    public total?: number;
    public items?: Array<WorkloadStatistics>;
    public constructor(total?: number, items?: Array<WorkloadStatistics>) { 
        this['total'] = total;
        this['items'] = items;
    }
    public withTotal(total: number): WorkloadListStatisticsStatistics {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<WorkloadStatistics>): WorkloadListStatisticsStatistics {
        this['items'] = items;
        return this;
    }
}