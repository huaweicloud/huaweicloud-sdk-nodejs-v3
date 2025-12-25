

export class BusinessCardImageConfig {
    private 'human_image'?: string;
    private 'logo_image'?: string;
    private 'id_card_image1'?: string;
    private 'id_card_image2'?: string;
    private 'authorize_use_human_image'?: boolean;
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
    public withIdCardImage1(idCardImage1: string): BusinessCardImageConfig {
        this['id_card_image1'] = idCardImage1;
        return this;
    }
    public set idCardImage1(idCardImage1: string  | undefined) {
        this['id_card_image1'] = idCardImage1;
    }
    public get idCardImage1(): string | undefined {
        return this['id_card_image1'];
    }
    public withIdCardImage2(idCardImage2: string): BusinessCardImageConfig {
        this['id_card_image2'] = idCardImage2;
        return this;
    }
    public set idCardImage2(idCardImage2: string  | undefined) {
        this['id_card_image2'] = idCardImage2;
    }
    public get idCardImage2(): string | undefined {
        return this['id_card_image2'];
    }
    public withAuthorizeUseHumanImage(authorizeUseHumanImage: boolean): BusinessCardImageConfig {
        this['authorize_use_human_image'] = authorizeUseHumanImage;
        return this;
    }
    public set authorizeUseHumanImage(authorizeUseHumanImage: boolean  | undefined) {
        this['authorize_use_human_image'] = authorizeUseHumanImage;
    }
    public get authorizeUseHumanImage(): boolean | undefined {
        return this['authorize_use_human_image'];
    }
}