

export class ListTasksResponseInfoIacScanInfo {
    private 'file_type'?: string;
    private 'scan_file_num'?: number;
    private 'success_file_num'?: number;
    private 'failed_file_num'?: number;
    public constructor() { 
    }
    public withFileType(fileType: string): ListTasksResponseInfoIacScanInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withScanFileNum(scanFileNum: number): ListTasksResponseInfoIacScanInfo {
        this['scan_file_num'] = scanFileNum;
        return this;
    }
    public set scanFileNum(scanFileNum: number  | undefined) {
        this['scan_file_num'] = scanFileNum;
    }
    public get scanFileNum(): number | undefined {
        return this['scan_file_num'];
    }
    public withSuccessFileNum(successFileNum: number): ListTasksResponseInfoIacScanInfo {
        this['success_file_num'] = successFileNum;
        return this;
    }
    public set successFileNum(successFileNum: number  | undefined) {
        this['success_file_num'] = successFileNum;
    }
    public get successFileNum(): number | undefined {
        return this['success_file_num'];
    }
    public withFailedFileNum(failedFileNum: number): ListTasksResponseInfoIacScanInfo {
        this['failed_file_num'] = failedFileNum;
        return this;
    }
    public set failedFileNum(failedFileNum: number  | undefined) {
        this['failed_file_num'] = failedFileNum;
    }
    public get failedFileNum(): number | undefined {
        return this['failed_file_num'];
    }
}