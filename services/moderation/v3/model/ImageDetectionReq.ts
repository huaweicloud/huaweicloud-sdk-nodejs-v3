import { ImgTextConfig } from './ImgTextConfig';


export class ImageDetectionReq {
    private 'event_type'?: string;
    public categories?: Array<string>;
    private 'image_text_config'?: ImgTextConfig;
    public url?: string;
    public image?: string;
    public constructor(eventType?: string, categories?: Array<string>) { 
        this['event_type'] = eventType;
        this['categories'] = categories;
    }
    public withEventType(eventType: string): ImageDetectionReq {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withCategories(categories: Array<string>): ImageDetectionReq {
        this['categories'] = categories;
        return this;
    }
    public withImageTextConfig(imageTextConfig: ImgTextConfig): ImageDetectionReq {
        this['image_text_config'] = imageTextConfig;
        return this;
    }
    public set imageTextConfig(imageTextConfig: ImgTextConfig  | undefined) {
        this['image_text_config'] = imageTextConfig;
    }
    public get imageTextConfig(): ImgTextConfig | undefined {
        return this['image_text_config'];
    }
    public withUrl(url: string): ImageDetectionReq {
        this['url'] = url;
        return this;
    }
    public withImage(image: string): ImageDetectionReq {
        this['image'] = image;
        return this;
    }
}