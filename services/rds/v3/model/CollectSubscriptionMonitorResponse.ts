
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectSubscriptionMonitorResponse extends SdkResponse {
    public status?: string;
    public latency?: number;
    private 'last_dist_sync'?: string;
    private 'agent_not_running'?: number;
    private 'pending_cmd_count'?: number;
    private 'estimated_process_time'?: number;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CollectSubscriptionMonitorResponse {
        this['status'] = status;
        return this;
    }
    public withLatency(latency: number): CollectSubscriptionMonitorResponse {
        this['latency'] = latency;
        return this;
    }
    public withLastDistSync(lastDistSync: string): CollectSubscriptionMonitorResponse {
        this['last_dist_sync'] = lastDistSync;
        return this;
    }
    public set lastDistSync(lastDistSync: string  | undefined) {
        this['last_dist_sync'] = lastDistSync;
    }
    public get lastDistSync(): string | undefined {
        return this['last_dist_sync'];
    }
    public withAgentNotRunning(agentNotRunning: number): CollectSubscriptionMonitorResponse {
        this['agent_not_running'] = agentNotRunning;
        return this;
    }
    public set agentNotRunning(agentNotRunning: number  | undefined) {
        this['agent_not_running'] = agentNotRunning;
    }
    public get agentNotRunning(): number | undefined {
        return this['agent_not_running'];
    }
    public withPendingCmdCount(pendingCmdCount: number): CollectSubscriptionMonitorResponse {
        this['pending_cmd_count'] = pendingCmdCount;
        return this;
    }
    public set pendingCmdCount(pendingCmdCount: number  | undefined) {
        this['pending_cmd_count'] = pendingCmdCount;
    }
    public get pendingCmdCount(): number | undefined {
        return this['pending_cmd_count'];
    }
    public withEstimatedProcessTime(estimatedProcessTime: number): CollectSubscriptionMonitorResponse {
        this['estimated_process_time'] = estimatedProcessTime;
        return this;
    }
    public set estimatedProcessTime(estimatedProcessTime: number  | undefined) {
        this['estimated_process_time'] = estimatedProcessTime;
    }
    public get estimatedProcessTime(): number | undefined {
        return this['estimated_process_time'];
    }
}