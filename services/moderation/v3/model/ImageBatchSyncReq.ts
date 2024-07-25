import { ImageBatchSyncReqImageTextConfig } from './ImageBatchSyncReqImageTextConfig';
import { ImageBatchSyncReqUrls } from './ImageBatchSyncReqUrls';


export class ImageBatchSyncReq {
    private 'event_type'?: string;
    public categories?: Array<string>;
    private 'image_text_config'?: ImageBatchSyncReqImageTextConfig;
    public urls?: Array<ImageBatchSyncReqUrls>;
    public language?: string;
    private 'biz_type'?: string;
    public constructor(urls?: Array<ImageBatchSyncReqUrls>) { 
        this['urls'] = urls;
    }
    public withEventType(eventType: string): ImageBatchSyncReq {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withCategories(categories: Array<string>): ImageBatchSyncReq {
        this['categories'] = categories;
        return this;
    }
    public withImageTextConfig(imageTextConfig: ImageBatchSyncReqImageTextConfig): ImageBatchSyncReq {
        this['image_text_config'] = imageTextConfig;
        return this;
    }
    public set imageTextConfig(imageTextConfig: ImageBatchSyncReqImageTextConfig  | undefined) {
        this['image_text_config'] = imageTextConfig;
    }
    public get imageTextConfig(): ImageBatchSyncReqImageTextConfig | undefined {
        return this['image_text_config'];
    }
    public withUrls(urls: Array<ImageBatchSyncReqUrls>): ImageBatchSyncReq {
        this['urls'] = urls;
        return this;
    }
    public withLanguage(language: string): ImageBatchSyncReq {
        this['language'] = language;
        return this;
    }
    public withBizType(bizType: string): ImageBatchSyncReq {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): string | undefined {
        return this['biz_type'];
    }
}