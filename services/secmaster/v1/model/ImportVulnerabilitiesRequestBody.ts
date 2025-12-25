

export class ImportVulnerabilitiesRequestBody {
    public uploadFile?: any;
    public constructor(uploadFile?: any) { 
        this['uploadFile'] = uploadFile;
    }
    public withUploadFile(uploadFile: any): ImportVulnerabilitiesRequestBody {
        this['uploadFile'] = uploadFile;
        return this;
    }
}