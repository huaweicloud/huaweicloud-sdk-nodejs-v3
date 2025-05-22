

export class UploadIssueImgRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadIssueImgRequestBody {
        this['file'] = file;
        return this;
    }
}