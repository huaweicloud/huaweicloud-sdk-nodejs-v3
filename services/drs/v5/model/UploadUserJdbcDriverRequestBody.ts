

export class UploadUserJdbcDriverRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): UploadUserJdbcDriverRequestBody {
        this['file'] = file;
        return this;
    }
}