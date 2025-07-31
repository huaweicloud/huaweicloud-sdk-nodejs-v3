

export class ListIacFilesResponseInfoDataList {
    private 'file_id'?: string;
    private 'file_name'?: string;
    private 'file_type'?: string;
    public risky?: boolean;
    private 'risk_num'?: number;
    private 'first_scan_time'?: number;
    private 'last_scan_time'?: number;
    private 'upload_file_time'?: number;
    private 'cicd_id'?: string;
    private 'cicd_name'?: string;
    private 'scan_type'?: string;
    public constructor() { 
    }
    public withFileId(fileId: string): ListIacFilesResponseInfoDataList {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withFileName(fileName: string): ListIacFilesResponseInfoDataList {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: string): ListIacFilesResponseInfoDataList {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withRisky(risky: boolean): ListIacFilesResponseInfoDataList {
        this['risky'] = risky;
        return this;
    }
    public withRiskNum(riskNum: number): ListIacFilesResponseInfoDataList {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withFirstScanTime(firstScanTime: number): ListIacFilesResponseInfoDataList {
        this['first_scan_time'] = firstScanTime;
        return this;
    }
    public set firstScanTime(firstScanTime: number  | undefined) {
        this['first_scan_time'] = firstScanTime;
    }
    public get firstScanTime(): number | undefined {
        return this['first_scan_time'];
    }
    public withLastScanTime(lastScanTime: number): ListIacFilesResponseInfoDataList {
        this['last_scan_time'] = lastScanTime;
        return this;
    }
    public set lastScanTime(lastScanTime: number  | undefined) {
        this['last_scan_time'] = lastScanTime;
    }
    public get lastScanTime(): number | undefined {
        return this['last_scan_time'];
    }
    public withUploadFileTime(uploadFileTime: number): ListIacFilesResponseInfoDataList {
        this['upload_file_time'] = uploadFileTime;
        return this;
    }
    public set uploadFileTime(uploadFileTime: number  | undefined) {
        this['upload_file_time'] = uploadFileTime;
    }
    public get uploadFileTime(): number | undefined {
        return this['upload_file_time'];
    }
    public withCicdId(cicdId: string): ListIacFilesResponseInfoDataList {
        this['cicd_id'] = cicdId;
        return this;
    }
    public set cicdId(cicdId: string  | undefined) {
        this['cicd_id'] = cicdId;
    }
    public get cicdId(): string | undefined {
        return this['cicd_id'];
    }
    public withCicdName(cicdName: string): ListIacFilesResponseInfoDataList {
        this['cicd_name'] = cicdName;
        return this;
    }
    public set cicdName(cicdName: string  | undefined) {
        this['cicd_name'] = cicdName;
    }
    public get cicdName(): string | undefined {
        return this['cicd_name'];
    }
    public withScanType(scanType: string): ListIacFilesResponseInfoDataList {
        this['scan_type'] = scanType;
        return this;
    }
    public set scanType(scanType: string  | undefined) {
        this['scan_type'] = scanType;
    }
    public get scanType(): string | undefined {
        return this['scan_type'];
    }
}