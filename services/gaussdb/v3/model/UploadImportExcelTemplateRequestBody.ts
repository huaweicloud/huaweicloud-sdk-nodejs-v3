

export class UploadImportExcelTemplateRequestBody {
    private 'template_type'?: string;
    public file?: any;
    private 'is_instance_level'?: UploadImportExcelTemplateRequestBodyIsInstanceLevelEnum | string;
    private 'selected_dbs'?: string;
    private 'is_support_regexp'?: UploadImportExcelTemplateRequestBodyIsSupportRegexpEnum | string;
    public constructor(templateType?: string, file?: any, selectedDbs?: string) { 
        this['template_type'] = templateType;
        this['file'] = file;
        this['selected_dbs'] = selectedDbs;
    }
    public withTemplateType(templateType: string): UploadImportExcelTemplateRequestBody {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withFile(file: any): UploadImportExcelTemplateRequestBody {
        this['file'] = file;
        return this;
    }
    public withIsInstanceLevel(isInstanceLevel: UploadImportExcelTemplateRequestBodyIsInstanceLevelEnum | string): UploadImportExcelTemplateRequestBody {
        this['is_instance_level'] = isInstanceLevel;
        return this;
    }
    public set isInstanceLevel(isInstanceLevel: UploadImportExcelTemplateRequestBodyIsInstanceLevelEnum | string  | undefined) {
        this['is_instance_level'] = isInstanceLevel;
    }
    public get isInstanceLevel(): UploadImportExcelTemplateRequestBodyIsInstanceLevelEnum | string | undefined {
        return this['is_instance_level'];
    }
    public withSelectedDbs(selectedDbs: string): UploadImportExcelTemplateRequestBody {
        this['selected_dbs'] = selectedDbs;
        return this;
    }
    public set selectedDbs(selectedDbs: string  | undefined) {
        this['selected_dbs'] = selectedDbs;
    }
    public get selectedDbs(): string | undefined {
        return this['selected_dbs'];
    }
    public withIsSupportRegexp(isSupportRegexp: UploadImportExcelTemplateRequestBodyIsSupportRegexpEnum | string): UploadImportExcelTemplateRequestBody {
        this['is_support_regexp'] = isSupportRegexp;
        return this;
    }
    public set isSupportRegexp(isSupportRegexp: UploadImportExcelTemplateRequestBodyIsSupportRegexpEnum | string  | undefined) {
        this['is_support_regexp'] = isSupportRegexp;
    }
    public get isSupportRegexp(): UploadImportExcelTemplateRequestBodyIsSupportRegexpEnum | string | undefined {
        return this['is_support_regexp'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UploadImportExcelTemplateRequestBodyIsInstanceLevelEnum {
    TRUE = 'true',
    FALSE = 'false'
}
/**
    * @export
    * @enum {string}
    */
export enum UploadImportExcelTemplateRequestBodyIsSupportRegexpEnum {
    TRUE = 'true',
    FALSE = 'false'
}
