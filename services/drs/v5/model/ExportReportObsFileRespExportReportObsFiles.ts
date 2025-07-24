

export class ExportReportObsFileRespExportReportObsFiles {
    private 'file_name'?: string;
    private 'last_modified'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): ExportReportObsFileRespExportReportObsFiles {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withLastModified(lastModified: string): ExportReportObsFileRespExportReportObsFiles {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: string  | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified(): string | undefined {
        return this['last_modified'];
    }
}