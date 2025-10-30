

export class ImageSensitiveInfo {
    private 'sensitive_info_id'?: string;
    public severity?: string;
    public name?: string;
    public description?: string;
    public position?: string;
    private 'file_path'?: string;
    public content?: string;
    private 'latest_scan_time'?: number;
    private 'handle_status'?: string;
    private 'operate_accept'?: string;
    public constructor() { 
    }
    public withSensitiveInfoId(sensitiveInfoId: string): ImageSensitiveInfo {
        this['sensitive_info_id'] = sensitiveInfoId;
        return this;
    }
    public set sensitiveInfoId(sensitiveInfoId: string  | undefined) {
        this['sensitive_info_id'] = sensitiveInfoId;
    }
    public get sensitiveInfoId(): string | undefined {
        return this['sensitive_info_id'];
    }
    public withSeverity(severity: string): ImageSensitiveInfo {
        this['severity'] = severity;
        return this;
    }
    public withName(name: string): ImageSensitiveInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ImageSensitiveInfo {
        this['description'] = description;
        return this;
    }
    public withPosition(position: string): ImageSensitiveInfo {
        this['position'] = position;
        return this;
    }
    public withFilePath(filePath: string): ImageSensitiveInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withContent(content: string): ImageSensitiveInfo {
        this['content'] = content;
        return this;
    }
    public withLatestScanTime(latestScanTime: number): ImageSensitiveInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withHandleStatus(handleStatus: string): ImageSensitiveInfo {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withOperateAccept(operateAccept: string): ImageSensitiveInfo {
        this['operate_accept'] = operateAccept;
        return this;
    }
    public set operateAccept(operateAccept: string  | undefined) {
        this['operate_accept'] = operateAccept;
    }
    public get operateAccept(): string | undefined {
        return this['operate_accept'];
    }
}