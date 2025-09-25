

export class UploadReportLogoRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadReportLogoRequestBody {
        this['file'] = file;
        return this;
    }
}