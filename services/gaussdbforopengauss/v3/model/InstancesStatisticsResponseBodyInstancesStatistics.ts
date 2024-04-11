

export class InstancesStatisticsResponseBodyInstancesStatistics {
    public status?: string;
    public count?: number;
    public constructor(status?: string, count?: number) { 
        this['status'] = status;
        this['count'] = count;
    }
    public withStatus(status: string): InstancesStatisticsResponseBodyInstancesStatistics {
        this['status'] = status;
        return this;
    }
    public withCount(count: number): InstancesStatisticsResponseBodyInstancesStatistics {
        this['count'] = count;
        return this;
    }
}