

export class ListImagesRequest {
    private 'image_type'?: string;
    public status?: number;
    public offset?: number;
    public limit?: number;
    private 'image_id'?: string;
    private 'image_name'?: string;
    private 'create_since'?: number;
    private 'create_until'?: number;
    private 'src_project_id'?: string;
    public constructor() { 
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
    public withStatus(status: number): ListImagesRequest {
        this['status'] = status;
        return this;
    }
    public withOffset(offset: number): ListImagesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImagesRequest {
        this['limit'] = limit;
        return this;
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
    public withImageName(imageName: string): ListImagesRequest {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withCreateSince(createSince: number): ListImagesRequest {
        this['create_since'] = createSince;
        return this;
    }
    public set createSince(createSince: number  | undefined) {
        this['create_since'] = createSince;
    }
    public get createSince(): number | undefined {
        return this['create_since'];
    }
    public withCreateUntil(createUntil: number): ListImagesRequest {
        this['create_until'] = createUntil;
        return this;
    }
    public set createUntil(createUntil: number  | undefined) {
        this['create_until'] = createUntil;
    }
    public get createUntil(): number | undefined {
        return this['create_until'];
    }
    public withSrcProjectId(srcProjectId: string): ListImagesRequest {
        this['src_project_id'] = srcProjectId;
        return this;
    }
    public set srcProjectId(srcProjectId: string  | undefined) {
        this['src_project_id'] = srcProjectId;
    }
    public get srcProjectId(): string | undefined {
        return this['src_project_id'];
    }
}