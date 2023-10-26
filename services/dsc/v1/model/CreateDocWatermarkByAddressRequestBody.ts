

export class CreateDocWatermarkByAddressRequestBody {
    private 'region_id'?: string;
    private 'src_file'?: string;
    private 'doc_type'?: CreateDocWatermarkByAddressRequestBodyDocTypeEnum | string;
    private 'dst_file'?: string;
    private 'blind_watermark'?: string;
    private 'visible_watermark'?: string;
    private 'image_mark'?: string;
    private 'visible_type'?: CreateDocWatermarkByAddressRequestBodyVisibleTypeEnum | string;
    private 'file_password'?: string;
    private 'marked_file_password'?: string;
    private 'readonly_password'?: string;
    public front?: number;
    public rotation?: number;
    public opacity?: number;
    public constructor(regionId?: string, srcFile?: string, docType?: string) { 
        this['region_id'] = regionId;
        this['src_file'] = srcFile;
        this['doc_type'] = docType;
    }
    public withRegionId(regionId: string): CreateDocWatermarkByAddressRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withSrcFile(srcFile: string): CreateDocWatermarkByAddressRequestBody {
        this['src_file'] = srcFile;
        return this;
    }
    public set srcFile(srcFile: string  | undefined) {
        this['src_file'] = srcFile;
    }
    public get srcFile(): string | undefined {
        return this['src_file'];
    }
    public withDocType(docType: CreateDocWatermarkByAddressRequestBodyDocTypeEnum | string): CreateDocWatermarkByAddressRequestBody {
        this['doc_type'] = docType;
        return this;
    }
    public set docType(docType: CreateDocWatermarkByAddressRequestBodyDocTypeEnum | string  | undefined) {
        this['doc_type'] = docType;
    }
    public get docType(): CreateDocWatermarkByAddressRequestBodyDocTypeEnum | string | undefined {
        return this['doc_type'];
    }
    public withDstFile(dstFile: string): CreateDocWatermarkByAddressRequestBody {
        this['dst_file'] = dstFile;
        return this;
    }
    public set dstFile(dstFile: string  | undefined) {
        this['dst_file'] = dstFile;
    }
    public get dstFile(): string | undefined {
        return this['dst_file'];
    }
    public withBlindWatermark(blindWatermark: string): CreateDocWatermarkByAddressRequestBody {
        this['blind_watermark'] = blindWatermark;
        return this;
    }
    public set blindWatermark(blindWatermark: string  | undefined) {
        this['blind_watermark'] = blindWatermark;
    }
    public get blindWatermark(): string | undefined {
        return this['blind_watermark'];
    }
    public withVisibleWatermark(visibleWatermark: string): CreateDocWatermarkByAddressRequestBody {
        this['visible_watermark'] = visibleWatermark;
        return this;
    }
    public set visibleWatermark(visibleWatermark: string  | undefined) {
        this['visible_watermark'] = visibleWatermark;
    }
    public get visibleWatermark(): string | undefined {
        return this['visible_watermark'];
    }
    public withImageMark(imageMark: string): CreateDocWatermarkByAddressRequestBody {
        this['image_mark'] = imageMark;
        return this;
    }
    public set imageMark(imageMark: string  | undefined) {
        this['image_mark'] = imageMark;
    }
    public get imageMark(): string | undefined {
        return this['image_mark'];
    }
    public withVisibleType(visibleType: CreateDocWatermarkByAddressRequestBodyVisibleTypeEnum | string): CreateDocWatermarkByAddressRequestBody {
        this['visible_type'] = visibleType;
        return this;
    }
    public set visibleType(visibleType: CreateDocWatermarkByAddressRequestBodyVisibleTypeEnum | string  | undefined) {
        this['visible_type'] = visibleType;
    }
    public get visibleType(): CreateDocWatermarkByAddressRequestBodyVisibleTypeEnum | string | undefined {
        return this['visible_type'];
    }
    public withFilePassword(filePassword: string): CreateDocWatermarkByAddressRequestBody {
        this['file_password'] = filePassword;
        return this;
    }
    public set filePassword(filePassword: string  | undefined) {
        this['file_password'] = filePassword;
    }
    public get filePassword(): string | undefined {
        return this['file_password'];
    }
    public withMarkedFilePassword(markedFilePassword: string): CreateDocWatermarkByAddressRequestBody {
        this['marked_file_password'] = markedFilePassword;
        return this;
    }
    public set markedFilePassword(markedFilePassword: string  | undefined) {
        this['marked_file_password'] = markedFilePassword;
    }
    public get markedFilePassword(): string | undefined {
        return this['marked_file_password'];
    }
    public withReadonlyPassword(readonlyPassword: string): CreateDocWatermarkByAddressRequestBody {
        this['readonly_password'] = readonlyPassword;
        return this;
    }
    public set readonlyPassword(readonlyPassword: string  | undefined) {
        this['readonly_password'] = readonlyPassword;
    }
    public get readonlyPassword(): string | undefined {
        return this['readonly_password'];
    }
    public withFront(front: number): CreateDocWatermarkByAddressRequestBody {
        this['front'] = front;
        return this;
    }
    public withRotation(rotation: number): CreateDocWatermarkByAddressRequestBody {
        this['rotation'] = rotation;
        return this;
    }
    public withOpacity(opacity: number): CreateDocWatermarkByAddressRequestBody {
        this['opacity'] = opacity;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDocWatermarkByAddressRequestBodyDocTypeEnum {
    WORD = 'WORD',
    EXCEL = 'EXCEL',
    PDF = 'PDF',
    PPT = 'PPT'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateDocWatermarkByAddressRequestBodyVisibleTypeEnum {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE'
}
