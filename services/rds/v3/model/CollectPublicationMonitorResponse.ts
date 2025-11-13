
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectPublicationMonitorResponse extends SdkResponse {
    public status?: string;
    private 'worst_latency'?: number;
    private 'best_latency'?: number;
    private 'average_latency'?: number;
    private 'last_dist_sync'?: string;
    private 'replicated_transactions'?: number;
    private 'replication_rate_trans'?: number;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CollectPublicationMonitorResponse {
        this['status'] = status;
        return this;
    }
    public withWorstLatency(worstLatency: number): CollectPublicationMonitorResponse {
        this['worst_latency'] = worstLatency;
        return this;
    }
    public set worstLatency(worstLatency: number  | undefined) {
        this['worst_latency'] = worstLatency;
    }
    public get worstLatency(): number | undefined {
        return this['worst_latency'];
    }
    public withBestLatency(bestLatency: number): CollectPublicationMonitorResponse {
        this['best_latency'] = bestLatency;
        return this;
    }
    public set bestLatency(bestLatency: number  | undefined) {
        this['best_latency'] = bestLatency;
    }
    public get bestLatency(): number | undefined {
        return this['best_latency'];
    }
    public withAverageLatency(averageLatency: number): CollectPublicationMonitorResponse {
        this['average_latency'] = averageLatency;
        return this;
    }
    public set averageLatency(averageLatency: number  | undefined) {
        this['average_latency'] = averageLatency;
    }
    public get averageLatency(): number | undefined {
        return this['average_latency'];
    }
    public withLastDistSync(lastDistSync: string): CollectPublicationMonitorResponse {
        this['last_dist_sync'] = lastDistSync;
        return this;
    }
    public set lastDistSync(lastDistSync: string  | undefined) {
        this['last_dist_sync'] = lastDistSync;
    }
    public get lastDistSync(): string | undefined {
        return this['last_dist_sync'];
    }
    public withReplicatedTransactions(replicatedTransactions: number): CollectPublicationMonitorResponse {
        this['replicated_transactions'] = replicatedTransactions;
        return this;
    }
    public set replicatedTransactions(replicatedTransactions: number  | undefined) {
        this['replicated_transactions'] = replicatedTransactions;
    }
    public get replicatedTransactions(): number | undefined {
        return this['replicated_transactions'];
    }
    public withReplicationRateTrans(replicationRateTrans: number): CollectPublicationMonitorResponse {
        this['replication_rate_trans'] = replicationRateTrans;
        return this;
    }
    public set replicationRateTrans(replicationRateTrans: number  | undefined) {
        this['replication_rate_trans'] = replicationRateTrans;
    }
    public get replicationRateTrans(): number | undefined {
        return this['replication_rate_trans'];
    }
}