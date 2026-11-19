import { VulScanTaskStatisticsResponseInfoLastScanTaskRiskyHostNum } from './VulScanTaskStatisticsResponseInfoLastScanTaskRiskyHostNum';


export class VulScanTaskStatisticsResponseInfoLastScanTask {
    public id?: string;
    private 'scan_type'?: string;
    public status?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'scan_vul_types'?: Array<string>;
    private 'scanning_host_num'?: number;
    private 'success_host_num'?: number;
    private 'risky_host_num'?: VulScanTaskStatisticsResponseInfoLastScanTaskRiskyHostNum;
    private 'failed_host_num'?: number;
    private 'estimated_time'?: number;
    public constructor() { 
    }
    public withId(id: string): VulScanTaskStatisticsResponseInfoLastScanTask {
        this['id'] = id;
        return this;
    }
    public withScanType(scanType: string): VulScanTaskStatisticsResponseInfoLastScanTask {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withStatus(status: string): VulScanTaskStatisticsResponseInfoLastScanTask {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: number): VulScanTaskStatisticsResponseInfoLastScanTask {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): VulScanTaskStatisticsResponseInfoLastScanTask {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withScanVulTypes(scanVulTypes: Array<string>): VulScanTaskStatisticsResponseInfoLastScanTask {
        this['scan_vul_types'] = scanVulTypes;
        return this;
    }
    public set scanVulTypes(scanVulTypes: Array<string>  | undefined) {
        this['scan_vul_types'] = scanVulTypes;
    }
    public get scanVulTypes(): Array<string> | undefined {
        return this['scan_vul_types'];
    }
    public withScanningHostNum(scanningHostNum: number): VulScanTaskStatisticsResponseInfoLastScanTask {
        this['scanning_host_num'] = scanningHostNum;
        return this;
    }
    public set scanningHostNum(scanningHostNum: number  | undefined) {
        this['scanning_host_num'] = scanningHostNum;
    }
    public get scanningHostNum(): number | undefined {
        return this['scanning_host_num'];
    }
    public withSuccessHostNum(successHostNum: number): VulScanTaskStatisticsResponseInfoLastScanTask {
        this['success_host_num'] = successHostNum;
        return this;
    }
    public set successHostNum(successHostNum: number  | undefined) {
        this['success_host_num'] = successHostNum;
    }
    public get successHostNum(): number | undefined {
        return this['success_host_num'];
    }
    public withRiskyHostNum(riskyHostNum: VulScanTaskStatisticsResponseInfoLastScanTaskRiskyHostNum): VulScanTaskStatisticsResponseInfoLastScanTask {
        this['risky_host_num'] = riskyHostNum;
        return this;
    }
    public set riskyHostNum(riskyHostNum: VulScanTaskStatisticsResponseInfoLastScanTaskRiskyHostNum  | undefined) {
        this['risky_host_num'] = riskyHostNum;
    }
    public get riskyHostNum(): VulScanTaskStatisticsResponseInfoLastScanTaskRiskyHostNum | undefined {
        return this['risky_host_num'];
    }
    public withFailedHostNum(failedHostNum: number): VulScanTaskStatisticsResponseInfoLastScanTask {
        this['failed_host_num'] = failedHostNum;
        return this;
    }
    public set failedHostNum(failedHostNum: number  | undefined) {
        this['failed_host_num'] = failedHostNum;
    }
    public get failedHostNum(): number | undefined {
        return this['failed_host_num'];
    }
    public withEstimatedTime(estimatedTime: number): VulScanTaskStatisticsResponseInfoLastScanTask {
        this['estimated_time'] = estimatedTime;
        return this;
    }
    public set estimatedTime(estimatedTime: number  | undefined) {
        this['estimated_time'] = estimatedTime;
    }
    public get estimatedTime(): number | undefined {
        return this['estimated_time'];
    }
}