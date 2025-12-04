

export class PhoneImage {
    private 'image_name'?: string;
    private 'os_type'?: string;
    private 'is_public'?: number;
    private 'os_name'?: string;
    private 'image_label'?: string;
    private 'image_id'?: string;
    private 'is_support_encrypt'?: boolean;
    public constructor() { 
    }
    public withImageName(imageName: string): PhoneImage {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withOsType(osType: string): PhoneImage {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withIsPublic(isPublic: number): PhoneImage {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: number  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): number | undefined {
        return this['is_public'];
    }
    public withOsName(osName: string): PhoneImage {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withImageLabel(imageLabel: string): PhoneImage {
        this['image_label'] = imageLabel;
        return this;
    }
    public set imageLabel(imageLabel: string  | undefined) {
        this['image_label'] = imageLabel;
    }
    public get imageLabel(): string | undefined {
        return this['image_label'];
    }
    public withImageId(imageId: string): PhoneImage {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withIsSupportEncrypt(isSupportEncrypt: boolean): PhoneImage {
        this['is_support_encrypt'] = isSupportEncrypt;
        return this;
    }
    public set isSupportEncrypt(isSupportEncrypt: boolean  | undefined) {
        this['is_support_encrypt'] = isSupportEncrypt;
    }
    public get isSupportEncrypt(): boolean | undefined {
        return this['is_support_encrypt'];
    }
}