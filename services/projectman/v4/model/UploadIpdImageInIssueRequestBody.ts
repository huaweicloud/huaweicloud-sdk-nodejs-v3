

export class UploadIpdImageInIssueRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadIpdImageInIssueRequestBody {
        this['file'] = file;
        return this;
    }
}