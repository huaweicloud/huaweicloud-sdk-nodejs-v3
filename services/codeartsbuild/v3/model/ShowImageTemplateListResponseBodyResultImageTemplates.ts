

export class ShowImageTemplateListResponseBodyResultImageTemplates {
    private 'image_id'?: string;
    public organization?: string;
    private 'image_name'?: string;
    private 'image_label'?: string;
    private 'base_image'?: string;
    public title?: string;
    public description?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withImageId(imageId: string): ShowImageTemplateListResponseBodyResultImageTemplates {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withOrganization(organization: string): ShowImageTemplateListResponseBodyResultImageTemplates {
        this['organization'] = organization;
        return this;
    }
    public withImageName(imageName: string): ShowImageTemplateListResponseBodyResultImageTemplates {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withImageLabel(imageLabel: string): ShowImageTemplateListResponseBodyResultImageTemplates {
        this['image_label'] = imageLabel;
        return this;
    }
    public set imageLabel(imageLabel: string  | undefined) {
        this['image_label'] = imageLabel;
    }
    public get imageLabel(): string | undefined {
        return this['image_label'];
    }
    public withBaseImage(baseImage: string): ShowImageTemplateListResponseBodyResultImageTemplates {
        this['base_image'] = baseImage;
        return this;
    }
    public set baseImage(baseImage: string  | undefined) {
        this['base_image'] = baseImage;
    }
    public get baseImage(): string | undefined {
        return this['base_image'];
    }
    public withTitle(title: string): ShowImageTemplateListResponseBodyResultImageTemplates {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): ShowImageTemplateListResponseBodyResultImageTemplates {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): ShowImageTemplateListResponseBodyResultImageTemplates {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}