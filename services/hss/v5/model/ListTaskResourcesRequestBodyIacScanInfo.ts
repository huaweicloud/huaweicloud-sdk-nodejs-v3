

export class ListTaskResourcesRequestBodyIacScanInfo {
    private 'scan_status'?: string;
    private 'file_name'?: string;
    private 'chart_name'?: string;
    public constructor() { 
    }
    public withScanStatus(scanStatus: string): ListTaskResourcesRequestBodyIacScanInfo {
        this['scan_status'] = scanStatus;
        return this;
    }
    public set scanStatus(scanStatus: string  | undefined) {
        this['scan_status'] = scanStatus;
    }
    public get scanStatus(): string | undefined {
        return this['scan_status'];
    }
    public withFileName(fileName: string): ListTaskResourcesRequestBodyIacScanInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withChartName(chartName: string): ListTaskResourcesRequestBodyIacScanInfo {
        this['chart_name'] = chartName;
        return this;
    }
    public set chartName(chartName: string  | undefined) {
        this['chart_name'] = chartName;
    }
    public get chartName(): string | undefined {
        return this['chart_name'];
    }
}