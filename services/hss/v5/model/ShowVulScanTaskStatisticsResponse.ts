import { VulScanTaskStatisticsResponseInfoLastScanTask } from './VulScanTaskStatisticsResponseInfoLastScanTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVulScanTaskStatisticsResponse extends SdkResponse {
    private 'scan_task_count'?: number;
    private 'running_scan_task_count'?: number;
    private 'last_scan_task'?: VulScanTaskStatisticsResponseInfoLastScanTask;
    public constructor() { 
        super();
    }
    public withScanTaskCount(scanTaskCount: number): ShowVulScanTaskStatisticsResponse {
        this['scan_task_count'] = scanTaskCount;
        return this;
    }
    public set scanTaskCount(scanTaskCount: number  | undefined) {
        this['scan_task_count'] = scanTaskCount;
    }
    public get scanTaskCount(): number | undefined {
        return this['scan_task_count'];
    }
    public withRunningScanTaskCount(runningScanTaskCount: number): ShowVulScanTaskStatisticsResponse {
        this['running_scan_task_count'] = runningScanTaskCount;
        return this;
    }
    public set runningScanTaskCount(runningScanTaskCount: number  | undefined) {
        this['running_scan_task_count'] = runningScanTaskCount;
    }
    public get runningScanTaskCount(): number | undefined {
        return this['running_scan_task_count'];
    }
    public withLastScanTask(lastScanTask: VulScanTaskStatisticsResponseInfoLastScanTask): ShowVulScanTaskStatisticsResponse {
        this['last_scan_task'] = lastScanTask;
        return this;
    }
    public set lastScanTask(lastScanTask: VulScanTaskStatisticsResponseInfoLastScanTask  | undefined) {
        this['last_scan_task'] = lastScanTask;
    }
    public get lastScanTask(): VulScanTaskStatisticsResponseInfoLastScanTask | undefined {
        return this['last_scan_task'];
    }
}