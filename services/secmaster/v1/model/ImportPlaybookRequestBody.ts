

export class ImportPlaybookRequestBody {
    public uploadFile?: any;
    private 'upload_model'?: ImportPlaybookRequestBodyUploadModelEnum | string;
    public constructor(uploadFile?: any) { 
        this['uploadFile'] = uploadFile;
    }
    public withUploadFile(uploadFile: any): ImportPlaybookRequestBody {
        this['uploadFile'] = uploadFile;
        return this;
    }
    public withUploadModel(uploadModel: ImportPlaybookRequestBodyUploadModelEnum | string): ImportPlaybookRequestBody {
        this['upload_model'] = uploadModel;
        return this;
    }
    public set uploadModel(uploadModel: ImportPlaybookRequestBodyUploadModelEnum | string  | undefined) {
        this['upload_model'] = uploadModel;
    }
    public get uploadModel(): ImportPlaybookRequestBodyUploadModelEnum | string | undefined {
        return this['upload_model'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportPlaybookRequestBodyUploadModelEnum {
    VERIFY = 'verify',
    IMPORT = 'import'
}
