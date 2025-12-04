

export class ListImagesView {
    private 'domain_id'?: string;
    private 'image_name'?: string;
    private 'update_time'?: string;
    private 'create_time'?: string;
    private 'image_size'?: number;
    private 'project_id'?: string;
    private 'image_id'?: string;
    private 'image_version'?: string;
    private 'image_type'?: string;
    public status?: number;
    private 'src_project_id'?: string;
    public constructor() { 
    }
    public withDomainId(domainId: string): ListImagesView {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withImageName(imageName: string): ListImagesView {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withUpdateTime(updateTime: string): ListImagesView {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: string): ListImagesView {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withImageSize(imageSize: number): ListImagesView {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: number  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): number | undefined {
        return this['image_size'];
    }
    public withProjectId(projectId: string): ListImagesView {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withImageId(imageId: string): ListImagesView {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageVersion(imageVersion: string): ListImagesView {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withImageType(imageType: string): ListImagesView {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withStatus(status: number): ListImagesView {
        this['status'] = status;
        return this;
    }
    public withSrcProjectId(srcProjectId: string): ListImagesView {
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