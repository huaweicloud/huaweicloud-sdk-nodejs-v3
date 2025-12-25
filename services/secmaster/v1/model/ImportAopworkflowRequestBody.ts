

export class ImportAopworkflowRequestBody {
    public uploadFile?: any;
    public constructor(uploadFile?: any) { 
        this['uploadFile'] = uploadFile;
    }
    public withUploadFile(uploadFile: any): ImportAopworkflowRequestBody {
        this['uploadFile'] = uploadFile;
        return this;
    }
}