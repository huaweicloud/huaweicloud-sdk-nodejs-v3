

export class ImportAlertsRequestBody {
    public uploadFile?: any;
    public constructor(uploadFile?: any) { 
        this['uploadFile'] = uploadFile;
    }
    public withUploadFile(uploadFile: any): ImportAlertsRequestBody {
        this['uploadFile'] = uploadFile;
        return this;
    }
}