
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOverviewResponse extends SdkResponse {
    public waiting?: number;
    public replicate?: number;
    public syncing?: number;
    public stopped?: number;
    public deleting?: number;
    public cutovering?: number;
    public unavailable?: number;
    public stopping?: number;
    public skipping?: number;
    public finished?: number;
    public initialize?: number;
    public error?: number;
    public cloning?: number;
    public unconfigured?: number;
    public constructor() { 
        super();
    }
    public withWaiting(waiting: number): ShowOverviewResponse {
        this['waiting'] = waiting;
        return this;
    }
    public withReplicate(replicate: number): ShowOverviewResponse {
        this['replicate'] = replicate;
        return this;
    }
    public withSyncing(syncing: number): ShowOverviewResponse {
        this['syncing'] = syncing;
        return this;
    }
    public withStopped(stopped: number): ShowOverviewResponse {
        this['stopped'] = stopped;
        return this;
    }
    public withDeleting(deleting: number): ShowOverviewResponse {
        this['deleting'] = deleting;
        return this;
    }
    public withCutovering(cutovering: number): ShowOverviewResponse {
        this['cutovering'] = cutovering;
        return this;
    }
    public withUnavailable(unavailable: number): ShowOverviewResponse {
        this['unavailable'] = unavailable;
        return this;
    }
    public withStopping(stopping: number): ShowOverviewResponse {
        this['stopping'] = stopping;
        return this;
    }
    public withSkipping(skipping: number): ShowOverviewResponse {
        this['skipping'] = skipping;
        return this;
    }
    public withFinished(finished: number): ShowOverviewResponse {
        this['finished'] = finished;
        return this;
    }
    public withInitialize(initialize: number): ShowOverviewResponse {
        this['initialize'] = initialize;
        return this;
    }
    public withError(error: number): ShowOverviewResponse {
        this['error'] = error;
        return this;
    }
    public withCloning(cloning: number): ShowOverviewResponse {
        this['cloning'] = cloning;
        return this;
    }
    public withUnconfigured(unconfigured: number): ShowOverviewResponse {
        this['unconfigured'] = unconfigured;
        return this;
    }
}