

export class ImportDataobjectsRequestBody {
    public uploadFile?: any;
    public constructor() { 
    }
    public withUploadFile(uploadFile: any): ImportDataobjectsRequestBody {
        this['uploadFile'] = uploadFile;
        return this;
    }
}