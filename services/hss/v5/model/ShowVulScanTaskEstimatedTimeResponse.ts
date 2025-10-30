
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVulScanTaskEstimatedTimeResponse extends SdkResponse {
    private 'queue_time'?: number;
    private 'run_time'?: number;
    private 'total_time'?: number;
    public constructor() { 
        super();
    }
    public withQueueTime(queueTime: number): ShowVulScanTaskEstimatedTimeResponse {
        this['queue_time'] = queueTime;
        return this;
    }
    public set queueTime(queueTime: number  | undefined) {
        this['queue_time'] = queueTime;
    }
    public get queueTime(): number | undefined {
        return this['queue_time'];
    }
    public withRunTime(runTime: number): ShowVulScanTaskEstimatedTimeResponse {
        this['run_time'] = runTime;
        return this;
    }
    public set runTime(runTime: number  | undefined) {
        this['run_time'] = runTime;
    }
    public get runTime(): number | undefined {
        return this['run_time'];
    }
    public withTotalTime(totalTime: number): ShowVulScanTaskEstimatedTimeResponse {
        this['total_time'] = totalTime;
        return this;
    }
    public set totalTime(totalTime: number  | undefined) {
        this['total_time'] = totalTime;
    }
    public get totalTime(): number | undefined {
        return this['total_time'];
    }
}