
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCrossCloudDisasterInstanceMonitorResponse extends SdkResponse {
    private 'instance_id'?: string;
    public status?: string;
    public rpo?: string;
    public rto?: string;
    private 'rpo_threshold'?: string;
    private 'rto_threshold'?: string;
    private 'switchover_progress'?: string;
    private 'failover_progress'?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowCrossCloudDisasterInstanceMonitorResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): ShowCrossCloudDisasterInstanceMonitorResponse {
        this['status'] = status;
        return this;
    }
    public withRpo(rpo: string): ShowCrossCloudDisasterInstanceMonitorResponse {
        this['rpo'] = rpo;
        return this;
    }
    public withRto(rto: string): ShowCrossCloudDisasterInstanceMonitorResponse {
        this['rto'] = rto;
        return this;
    }
    public withRpoThreshold(rpoThreshold: string): ShowCrossCloudDisasterInstanceMonitorResponse {
        this['rpo_threshold'] = rpoThreshold;
        return this;
    }
    public set rpoThreshold(rpoThreshold: string  | undefined) {
        this['rpo_threshold'] = rpoThreshold;
    }
    public get rpoThreshold(): string | undefined {
        return this['rpo_threshold'];
    }
    public withRtoThreshold(rtoThreshold: string): ShowCrossCloudDisasterInstanceMonitorResponse {
        this['rto_threshold'] = rtoThreshold;
        return this;
    }
    public set rtoThreshold(rtoThreshold: string  | undefined) {
        this['rto_threshold'] = rtoThreshold;
    }
    public get rtoThreshold(): string | undefined {
        return this['rto_threshold'];
    }
    public withSwitchoverProgress(switchoverProgress: string): ShowCrossCloudDisasterInstanceMonitorResponse {
        this['switchover_progress'] = switchoverProgress;
        return this;
    }
    public set switchoverProgress(switchoverProgress: string  | undefined) {
        this['switchover_progress'] = switchoverProgress;
    }
    public get switchoverProgress(): string | undefined {
        return this['switchover_progress'];
    }
    public withFailoverProgress(failoverProgress: string): ShowCrossCloudDisasterInstanceMonitorResponse {
        this['failover_progress'] = failoverProgress;
        return this;
    }
    public set failoverProgress(failoverProgress: string  | undefined) {
        this['failover_progress'] = failoverProgress;
    }
    public get failoverProgress(): string | undefined {
        return this['failover_progress'];
    }
}