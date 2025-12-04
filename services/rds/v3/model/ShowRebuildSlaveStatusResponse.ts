
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRebuildSlaveStatusResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'workflow_id'?: string;
    private 'last_rebuild_time'?: string;
    private 'next_rebuild_time'?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowRebuildSlaveStatusResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withWorkflowId(workflowId: string): ShowRebuildSlaveStatusResponse {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withLastRebuildTime(lastRebuildTime: string): ShowRebuildSlaveStatusResponse {
        this['last_rebuild_time'] = lastRebuildTime;
        return this;
    }
    public set lastRebuildTime(lastRebuildTime: string  | undefined) {
        this['last_rebuild_time'] = lastRebuildTime;
    }
    public get lastRebuildTime(): string | undefined {
        return this['last_rebuild_time'];
    }
    public withNextRebuildTime(nextRebuildTime: string): ShowRebuildSlaveStatusResponse {
        this['next_rebuild_time'] = nextRebuildTime;
        return this;
    }
    public set nextRebuildTime(nextRebuildTime: string  | undefined) {
        this['next_rebuild_time'] = nextRebuildTime;
    }
    public get nextRebuildTime(): string | undefined {
        return this['next_rebuild_time'];
    }
}