

export class ImageUploadItem {
    private 'image_name'?: string;
    private 'image_size'?: number;
    private 'upload_content_type'?: string;
    public constructor(imageName?: string, imageSize?: number, uploadContentType?: string) { 
        this['image_name'] = imageName;
        this['image_size'] = imageSize;
        this['upload_content_type'] = uploadContentType;
    }
    public withImageName(imageName: string): ImageUploadItem {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageSize(imageSize: number): ImageUploadItem {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withUploadContentType(uploadContentType: string): ImageUploadItem {
        this['upload_content_type'] = uploadContentType;
        return this;
    }
    public set uploadContentType(uploadContentType: string  | undefined) {
        this['upload_content_type'] = uploadContentType;
    }
    public get uploadContentType(): string | undefined {
        return this['upload_content_type'];
    }
}