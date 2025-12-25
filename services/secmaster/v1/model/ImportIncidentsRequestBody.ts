

export class ImportIncidentsRequestBody {
    public uploadFile?: any;
    public constructor(uploadFile?: any) { 
        this['uploadFile'] = uploadFile;
    }
    public withUploadFile(uploadFile: any): ImportIncidentsRequestBody {
        this['uploadFile'] = uploadFile;
        return this;
    }
}