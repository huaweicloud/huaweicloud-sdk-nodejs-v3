

export class PoolStatisticsStatisticsStatus {
    public creating?: number;
    public created?: number;
    public failed?: number;
    public pending?: number;
    public constructor() { 
    }
    public withCreating(creating: number): PoolStatisticsStatisticsStatus {
        this['creating'] = creating;
        return this;
    }
    public withCreated(created: number): PoolStatisticsStatisticsStatus {
        this['created'] = created;
        return this;
    }
    public withFailed(failed: number): PoolStatisticsStatisticsStatus {
        this['failed'] = failed;
        return this;
    }
    public withPending(pending: number): PoolStatisticsStatisticsStatus {
        this['pending'] = pending;
        return this;
    }
}