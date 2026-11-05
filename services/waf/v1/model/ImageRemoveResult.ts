

export class ImageRemoveResult {
    private 'image_id'?: string;
    public success?: boolean;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withImageId(imageId: string): ImageRemoveResult {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withSuccess(success: boolean): ImageRemoveResult {
        this['success'] = success;
        return this;
    }
    public withErrorMsg(errorMsg: string): ImageRemoveResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}