

export class CreateTaskRequestBodyIacScanInfo {
    private 'file_type'?: string;
    private 'file_id_list'?: Array<string>;
    public constructor(fileType?: string, fileIdList?: Array<string>) { 
        this['file_type'] = fileType;
        this['file_id_list'] = fileIdList;
    }
    public withFileType(fileType: string): CreateTaskRequestBodyIacScanInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withFileIdList(fileIdList: Array<string>): CreateTaskRequestBodyIacScanInfo {
        this['file_id_list'] = fileIdList;
        return this;
    }
    public set fileIdList(fileIdList: Array<string>  | undefined) {
        this['file_id_list'] = fileIdList;
    }
    public get fileIdList(): Array<string> | undefined {
        return this['file_id_list'];
    }
}