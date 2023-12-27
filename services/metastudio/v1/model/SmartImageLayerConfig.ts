

export class SmartImageLayerConfig {
    private 'image_url'?: string;
    private 'display_duration'?: number;
    public constructor(imageUrl?: string) { 
        this['image_url'] = imageUrl;
    }
    public withImageUrl(imageUrl: string): SmartImageLayerConfig {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withDisplayDuration(displayDuration: number): SmartImageLayerConfig {
        this['display_duration'] = displayDuration;
        return this;
    }
    public set displayDuration(displayDuration: number  | undefined) {
        this['display_duration'] = displayDuration;
    }
    public get displayDuration(): number | undefined {
        return this['display_duration'];
    }
}