import { PoolStatisticsStatisticsStatus } from './PoolStatisticsStatisticsStatus';


export class PoolStatisticsStatistics {
    public status?: PoolStatisticsStatisticsStatus;
    public constructor() { 
    }
    public withStatus(status: PoolStatisticsStatisticsStatus): PoolStatisticsStatistics {
        this['status'] = status;
        return this;
    }
}