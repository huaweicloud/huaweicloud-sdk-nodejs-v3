

export class ListImagesRequest {
    private 'os_type'?: string;
    private 'image_type'?: string;
    public platform?: string;
    public architecture?: string;
    private 'package_type'?: string;
    private 'image_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_field'?: string;
    private 'sort_type'?: string;
    public constructor() { 
    }
    public withOsType(osType: string): ListImagesRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withImageType(imageType: string): ListImagesRequest {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withPlatform(platform: string): ListImagesRequest {
        this['platform'] = platform;
        return this;
    }
    public withArchitecture(architecture: string): ListImagesRequest {
        this['architecture'] = architecture;
        return this;
    }
    public withPackageType(packageType: string): ListImagesRequest {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withImageId(imageId: string): ListImagesRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withLimit(limit: number): ListImagesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListImagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortField(sortField: string): ListImagesRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: string): ListImagesRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): string | undefined {
        return this['sort_type'];
    }
}