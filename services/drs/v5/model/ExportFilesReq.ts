

export class ExportFilesReq {
    public files?: Array<string>;
    public constructor(files?: Array<string>) { 
        this['files'] = files;
    }
    public withFiles(files: Array<string>): ExportFilesReq {
        this['files'] = files;
        return this;
    }
}