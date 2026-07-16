import { WorkloadStatisticsStatus } from './WorkloadStatisticsStatus';


export class WorkloadStatistics {
    public type?: string;
    public total?: number;
    public status?: WorkloadStatisticsStatus;
    public constructor(type?: string, total?: number, status?: WorkloadStatisticsStatus) { 
        this['type'] = type;
        this['total'] = total;
        this['status'] = status;
    }
    public withType(type: string): WorkloadStatistics {
        this['type'] = type;
        return this;
    }
    public withTotal(total: number): WorkloadStatistics {
        this['total'] = total;
        return this;
    }
    public withStatus(status: WorkloadStatisticsStatus): WorkloadStatistics {
        this['status'] = status;
        return this;
    }
}