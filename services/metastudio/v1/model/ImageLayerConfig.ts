

export class ImageLayerConfig {
    private 'image_url'?: string;
    public constructor() { 
    }
    public withImageUrl(imageUrl: string): ImageLayerConfig {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
}