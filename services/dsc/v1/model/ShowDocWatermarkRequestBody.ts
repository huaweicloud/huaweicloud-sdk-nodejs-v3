

export class ShowDocWatermarkRequestBody {
    private 'doc_type'?: ShowDocWatermarkRequestBodyDocTypeEnum | string;
    private 'file_password'?: string;
    public file?: any;
    public constructor(docType?: string, file?: any) { 
        this['doc_type'] = docType;
        this['file'] = file;
    }
    public withDocType(docType: ShowDocWatermarkRequestBodyDocTypeEnum | string): ShowDocWatermarkRequestBody {
        this['doc_type'] = docType;
        return this;
    }
    public set docType(docType: ShowDocWatermarkRequestBodyDocTypeEnum | string  | undefined) {
        this['doc_type'] = docType;
    }
    public get docType(): ShowDocWatermarkRequestBodyDocTypeEnum | string | undefined {
        return this['doc_type'];
    }
    public withFilePassword(filePassword: string): ShowDocWatermarkRequestBody {
        this['file_password'] = filePassword;
        return this;
    }
    public set filePassword(filePassword: string  | undefined) {
        this['file_password'] = filePassword;
    }
    public get filePassword(): string | undefined {
        return this['file_password'];
    }
    public withFile(file: any): ShowDocWatermarkRequestBody {
        this['file'] = file;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDocWatermarkRequestBodyDocTypeEnum {
    WORD = 'WORD',
    EXCEL = 'EXCEL',
    PDF = 'PDF',
    PPT = 'PPT'
}
