

export class ListTaskResourcesResponseInfoIacScanDataList {
    private 'file_name'?: string;
    private 'file_type'?: string;
    private 'chart_name'?: string;
    private 'file_id'?: string;
    private 'file_size'?: number;
    private 'scan_status'?: string;
    private 'failed_reason'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
    }
    public withFileName(fileName: string): ListTaskResourcesResponseInfoIacScanDataList {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: string): ListTaskResourcesResponseInfoIacScanDataList {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withChartName(chartName: string): ListTaskResourcesResponseInfoIacScanDataList {
        this['chart_name'] = chartName;
        return this;
    }
    public set chartName(chartName: string  | undefined) {
        this['chart_name'] = chartName;
    }
    public get chartName(): string | undefined {
        return this['chart_name'];
    }
    public withFileId(fileId: string): ListTaskResourcesResponseInfoIacScanDataList {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withFileSize(fileSize: number): ListTaskResourcesResponseInfoIacScanDataList {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withScanStatus(scanStatus: string): ListTaskResourcesResponseInfoIacScanDataList {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withFailedReason(failedReason: string): ListTaskResourcesResponseInfoIacScanDataList {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withStartTime(startTime: number): ListTaskResourcesResponseInfoIacScanDataList {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListTaskResourcesResponseInfoIacScanDataList {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}