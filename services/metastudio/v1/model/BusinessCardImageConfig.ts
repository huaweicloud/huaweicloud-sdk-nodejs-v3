

export class BusinessCardImageConfig {
    private 'human_image'?: string;
    private 'logo_image'?: string;
    public constructor(humanImage?: string) { 
        this['human_image'] = humanImage;
    }
    public withHumanImage(humanImage: string): BusinessCardImageConfig {
        this['human_image'] = humanImage;
        return this;
    }
    public set humanImage(humanImage: string  | undefined) {
        this['human_image'] = humanImage;
    }
    public get humanImage(): string | undefined {
        return this['human_image'];
    }
    public withLogoImage(logoImage: string): BusinessCardImageConfig {
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