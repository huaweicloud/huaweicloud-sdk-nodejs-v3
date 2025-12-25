

export class UploadAttachmentRequestBody {
    public fileType?: UploadAttachmentRequestBodyFileTypeEnum | string;
    public uploadFile?: any;
    public constructor(uploadFile?: any) { 
        this['uploadFile'] = uploadFile;
    }
    public withFileType(fileType: UploadAttachmentRequestBodyFileTypeEnum | string): UploadAttachmentRequestBody {
        this['fileType'] = fileType;
        return this;
    }
    public withUploadFile(uploadFile: any): UploadAttachmentRequestBody {
        this['uploadFile'] = uploadFile;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UploadAttachmentRequestBodyFileTypeEnum {
    USER_TASK = 'user_task'
}
