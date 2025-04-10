

export class VulScanTaskInfo {
    public id?: string;
    private 'scan_type'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'scan_vul_types'?: Array<string>;
    public status?: string;
    private 'scanning_host_num'?: number;
    private 'success_host_num'?: number;
    private 'failed_host_num'?: number;
    private 'estimated_time'?: number;
    public constructor() { 
    }
    public withId(id: string): VulScanTaskInfo {
        this['id'] = id;
        return this;
    }
    public withScanType(scanType: string): VulScanTaskInfo {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
    public withStartTime(startTime: number): VulScanTaskInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): VulScanTaskInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withScanVulTypes(scanVulTypes: Array<string>): VulScanTaskInfo {
        this['scan_vul_types'] = scanVulTypes;
        return this;
    }
    public set scanVulTypes(scanVulTypes: Array<string>  | undefined) {
        this['scan_vul_types'] = scanVulTypes;
    }
    public get scanVulTypes(): Array<string> | undefined {
        return this['scan_vul_types'];
    }
    public withStatus(status: string): VulScanTaskInfo {
        this['status'] = status;
        return this;
    }
    public withScanningHostNum(scanningHostNum: number): VulScanTaskInfo {
        this['scanning_host_num'] = scanningHostNum;
        return this;
    }
    public set scanningHostNum(scanningHostNum: number  | undefined) {
        this['scanning_host_num'] = scanningHostNum;
    }
    public get scanningHostNum(): number | undefined {
        return this['scanning_host_num'];
    }
    public withSuccessHostNum(successHostNum: number): VulScanTaskInfo {
        this['success_host_num'] = successHostNum;
        return this;
    }
    public set successHostNum(successHostNum: number  | undefined) {
        this['success_host_num'] = successHostNum;
    }
    public get successHostNum(): number | undefined {
        return this['success_host_num'];
    }
    public withFailedHostNum(failedHostNum: number): VulScanTaskInfo {
        this['failed_host_num'] = failedHostNum;
        return this;
    }
    public set failedHostNum(failedHostNum: number  | undefined) {
        this['failed_host_num'] = failedHostNum;
    }
    public get failedHostNum(): number | undefined {
        return this['failed_host_num'];
    }
    public withEstimatedTime(estimatedTime: number): VulScanTaskInfo {
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