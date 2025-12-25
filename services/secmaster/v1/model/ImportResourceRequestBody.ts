

export class ImportResourceRequestBody {
    public uploadFile?: any;
    public constructor(uploadFile?: any) { 
        this['uploadFile'] = uploadFile;
    }
    public withUploadFile(uploadFile: any): ImportResourceRequestBody {
        this['uploadFile'] = uploadFile;
        return this;
    }
}