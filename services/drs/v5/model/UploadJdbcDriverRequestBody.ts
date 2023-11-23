

export class UploadJdbcDriverRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadJdbcDriverRequestBody {
        this['file'] = file;
        return this;
    }
}