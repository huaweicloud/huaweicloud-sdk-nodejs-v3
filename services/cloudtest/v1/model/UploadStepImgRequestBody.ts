

export class UploadStepImgRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadStepImgRequestBody {
        this['file'] = file;
        return this;
    }
}