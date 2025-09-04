

export class UploadCacheFileRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadCacheFileRequestBody {
        this['file'] = file;
        return this;
    }
}