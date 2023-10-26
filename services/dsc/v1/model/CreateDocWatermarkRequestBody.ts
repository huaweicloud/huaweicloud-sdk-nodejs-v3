

export class CreateDocWatermarkRequestBody {
    private 'doc_type'?: CreateDocWatermarkRequestBodyDocTypeEnum | string;
    private 'file_password'?: string;
    private 'marked_file_password'?: string;
    private 'readonly_password'?: string;
    private 'visible_watermark'?: string;
    private 'font_size'?: string;
    public rotation?: string;
    public opacity?: string;
    private 'blind_watermark'?: string;
    public file?: any;
    private 'image_mark'?: any;
    private 'visible_type'?: CreateDocWatermarkRequestBodyVisibleTypeEnum | string;
    public constructor(docType?: string, file?: any) { 
        this['doc_type'] = docType;
        this['file'] = file;
    }
    public withDocType(docType: CreateDocWatermarkRequestBodyDocTypeEnum | string): CreateDocWatermarkRequestBody {
        this['doc_type'] = docType;
        return this;
    }
    public set docType(docType: CreateDocWatermarkRequestBodyDocTypeEnum | string  | undefined) {
        this['doc_type'] = docType;
    }
    public get docType(): CreateDocWatermarkRequestBodyDocTypeEnum | string | undefined {
        return this['doc_type'];
    }
    public withFilePassword(filePassword: string): CreateDocWatermarkRequestBody {
        this['file_password'] = filePassword;
        return this;
    }
    public set filePassword(filePassword: string  | undefined) {
        this['file_password'] = filePassword;
    }
    public get filePassword(): string | undefined {
        return this['file_password'];
    }
    public withMarkedFilePassword(markedFilePassword: string): CreateDocWatermarkRequestBody {
        this['marked_file_password'] = markedFilePassword;
        return this;
    }
    public set markedFilePassword(markedFilePassword: string  | undefined) {
        this['marked_file_password'] = markedFilePassword;
    }
    public get markedFilePassword(): string | undefined {
        return this['marked_file_password'];
    }
    public withReadonlyPassword(readonlyPassword: string): CreateDocWatermarkRequestBody {
        this['readonly_password'] = readonlyPassword;
        return this;
    }
    public set readonlyPassword(readonlyPassword: string  | undefined) {
        this['readonly_password'] = readonlyPassword;
    }
    public get readonlyPassword(): string | undefined {
        return this['readonly_password'];
    }
    public withVisibleWatermark(visibleWatermark: string): CreateDocWatermarkRequestBody {
        this['visible_watermark'] = visibleWatermark;
        return this;
    }
    public set visibleWatermark(visibleWatermark: string  | undefined) {
        this['visible_watermark'] = visibleWatermark;
    }
    public get visibleWatermark(): string | undefined {
        return this['visible_watermark'];
    }
    public withFontSize(fontSize: string): CreateDocWatermarkRequestBody {
        this['font_size'] = fontSize;
        return this;
    }
    public set fontSize(fontSize: string  | undefined) {
        this['font_size'] = fontSize;
    }
    public get fontSize(): string | undefined {
        return this['font_size'];
    }
    public withRotation(rotation: string): CreateDocWatermarkRequestBody {
        this['rotation'] = rotation;
        return this;
    }
    public withOpacity(opacity: string): CreateDocWatermarkRequestBody {
        this['opacity'] = opacity;
        return this;
    }
    public withBlindWatermark(blindWatermark: string): CreateDocWatermarkRequestBody {
        this['blind_watermark'] = blindWatermark;
        return this;
    }
    public set blindWatermark(blindWatermark: string  | undefined) {
        this['blind_watermark'] = blindWatermark;
    }
    public get blindWatermark(): string | undefined {
        return this['blind_watermark'];
    }
    public withFile(file: any): CreateDocWatermarkRequestBody {
        this['file'] = file;
        return this;
    }
    public withImageMark(imageMark: any): CreateDocWatermarkRequestBody {
        this['image_mark'] = imageMark;
        return this;
    }
    public set imageMark(imageMark: any  | undefined) {
        this['image_mark'] = imageMark;
    }
    public get imageMark(): any | undefined {
        return this['image_mark'];
    }
    public withVisibleType(visibleType: CreateDocWatermarkRequestBodyVisibleTypeEnum | string): CreateDocWatermarkRequestBody {
        this['visible_type'] = visibleType;
        return this;
    }
    public set visibleType(visibleType: CreateDocWatermarkRequestBodyVisibleTypeEnum | string  | undefined) {
        this['visible_type'] = visibleType;
    }
    public get visibleType(): CreateDocWatermarkRequestBodyVisibleTypeEnum | string | undefined {
        return this['visible_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDocWatermarkRequestBodyDocTypeEnum {
    WORD = 'WORD',
    EXCEL = 'EXCEL',
    PDF = 'PDF',
    PPT = 'PPT'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDocWatermarkRequestBodyVisibleTypeEnum {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE'
}
