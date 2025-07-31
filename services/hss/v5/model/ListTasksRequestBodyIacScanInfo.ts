

export class ListTasksRequestBodyIacScanInfo {
    private 'file_type'?: string;
    public constructor() { 
    }
    public withFileType(fileType: string): ListTasksRequestBodyIacScanInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
}