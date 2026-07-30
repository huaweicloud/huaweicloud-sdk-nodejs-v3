

export class UpdateDaemonsetRespInfo {
    private 'failed_reson'?: string;
    private 'failed_reason'?: string;
    private 'cluster_id'?: string;
    public constructor() { 
    }
    public withFailedReson(failedReson: string): UpdateDaemonsetRespInfo {
        this['failed_reson'] = failedReson;
        return this;
    }
    public set failedReson(failedReson: string  | undefined) {
        this['failed_reson'] = failedReson;
    }
    public get failedReson(): string | undefined {
        return this['failed_reson'];
    }
    public withFailedReason(failedReason: string): UpdateDaemonsetRespInfo {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withClusterId(clusterId: string): UpdateDaemonsetRespInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}