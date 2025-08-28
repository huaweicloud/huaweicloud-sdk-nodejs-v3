

export class IacRequestInfo {
    private 'file_id_list'?: Array<string>;
    private 'file_name'?: string;
    private 'file_type'?: string;
    public risky?: boolean;
    private 'scan_type'?: string;
    public constructor() { 
    }
    public withFileIdList(fileIdList: Array<string>): IacRequestInfo {
        this['file_id_list'] = fileIdList;
        return this;
    }
    public set fileIdList(fileIdList: Array<string>  | undefined) {
        this['file_id_list'] = fileIdList;
    }
    public get fileIdList(): Array<string> | undefined {
        return this['file_id_list'];
    }
    public withFileName(fileName: string): IacRequestInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: string): IacRequestInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withRisky(risky: boolean): IacRequestInfo {
        this['risky'] = risky;
        return this;
    }
    public withScanType(scanType: string): IacRequestInfo {
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