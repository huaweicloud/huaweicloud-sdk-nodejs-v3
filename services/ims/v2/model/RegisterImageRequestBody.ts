

export class RegisterImageRequestBody {
    private 'image_url'?: string;
    public constructor(imageUrl?: string) { 
        this['image_url'] = imageUrl;
    }
    public withImageUrl(imageUrl: string): RegisterImageRequestBody {
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