

export class ImageUploadResult {
    private 'image_name'?: string;
    private 'image_id'?: string;
    private 'upload_url'?: string;
    public expire?: number;
    public success?: boolean;
    private 'error_msg'?: string;
    private 'error_code'?: string;
    public constructor() { 
    }
    public withImageName(imageName: string): ImageUploadResult {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageId(imageId: string): ImageUploadResult {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withUploadUrl(uploadUrl: string): ImageUploadResult {
        this['upload_url'] = uploadUrl;
        return this;
    }
    public set uploadUrl(uploadUrl: string  | undefined) {
        this['upload_url'] = uploadUrl;
    }
    public get uploadUrl(): string | undefined {
        return this['upload_url'];
    }
    public withExpire(expire: number): ImageUploadResult {
        this['expire'] = expire;
        return this;
    }
    public withSuccess(success: boolean): ImageUploadResult {
        this['success'] = success;
        return this;
    }
    public withErrorMsg(errorMsg: string): ImageUploadResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorCode(errorCode: string): ImageUploadResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}