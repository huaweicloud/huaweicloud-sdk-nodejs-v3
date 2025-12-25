

export class ImportIndicatorsRequestBody {
    public uploadFile?: any;
    public constructor(uploadFile?: any) { 
        this['uploadFile'] = uploadFile;
    }
    public withUploadFile(uploadFile: any): ImportIndicatorsRequestBody {
        this['uploadFile'] = uploadFile;
        return this;
    }
}