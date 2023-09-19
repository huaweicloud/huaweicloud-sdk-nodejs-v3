

export class BusinessCardImageUrl {
    private 'human_image_url'?: string;
    private 'logo_image'?: string;
    public constructor() { 
    }
    public withHumanImageUrl(humanImageUrl: string): BusinessCardImageUrl {
        this['human_image_url'] = humanImageUrl;
        return this;
    }
    public set humanImageUrl(humanImageUrl: string  | undefined) {
        this['human_image_url'] = humanImageUrl;
    }
    public get humanImageUrl(): string | undefined {
        return this['human_image_url'];
    }
    public withLogoImage(logoImage: string): BusinessCardImageUrl {
        this['logo_image'] = logoImage;
        return this;
    }
    public set logoImage(logoImage: string  | undefined) {
        this['logo_image'] = logoImage;
    }
    public get logoImage(): string | undefined {
        return this['logo_image'];
    }
}