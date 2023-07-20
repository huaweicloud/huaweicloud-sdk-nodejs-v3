import { VideoCreateRequestData } from './VideoCreateRequestData';


export class VideoCreateRequest {
    public data?: VideoCreateRequestData;
    private 'event_type'?: VideoCreateRequestEventTypeEnum | string;
    private 'image_categories'?: Array<VideoCreateRequestImageCategoriesEnum> | Array<string>;
    private 'audio_categories'?: Array<VideoCreateRequestAudioCategoriesEnum> | Array<string>;
    public callback?: string;
    public constructor(data?: VideoCreateRequestData, eventType?: string, imageCategories?: Array<string>) { 
        this['data'] = data;
        this['event_type'] = eventType;
        this['image_categories'] = imageCategories;
    }
    public withData(data: VideoCreateRequestData): VideoCreateRequest {
        this['data'] = data;
        return this;
    }
    public withEventType(eventType: VideoCreateRequestEventTypeEnum | string): VideoCreateRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: VideoCreateRequestEventTypeEnum | string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): VideoCreateRequestEventTypeEnum | string | undefined {
        return this['event_type'];
    }
    public withImageCategories(imageCategories: Array<VideoCreateRequestImageCategoriesEnum> | Array<string>): VideoCreateRequest {
        this['image_categories'] = imageCategories;
        return this;
    }
    public set imageCategories(imageCategories: Array<VideoCreateRequestImageCategoriesEnum> | Array<string>  | undefined) {
        this['image_categories'] = imageCategories;
    }
    public get imageCategories(): Array<VideoCreateRequestImageCategoriesEnum> | Array<string> | undefined {
        return this['image_categories'];
    }
    public withAudioCategories(audioCategories: Array<VideoCreateRequestAudioCategoriesEnum> | Array<string>): VideoCreateRequest {
        this['audio_categories'] = audioCategories;
        return this;
    }
    public set audioCategories(audioCategories: Array<VideoCreateRequestAudioCategoriesEnum> | Array<string>  | undefined) {
        this['audio_categories'] = audioCategories;
    }
    public get audioCategories(): Array<VideoCreateRequestAudioCategoriesEnum> | Array<string> | undefined {
        return this['audio_categories'];
    }
    public withCallback(callback: string): VideoCreateRequest {
        this['callback'] = callback;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoCreateRequestEventTypeEnum {
    DEFAULT = 'default'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoCreateRequestImageCategoriesEnum {
    PORN = 'porn',
    POLITICS = 'politics',
    TERRORISM = 'terrorism',
    IMAGE_TEXT = 'image_text'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoCreateRequestAudioCategoriesEnum {
    PORN = 'porn',
    AD = 'ad',
    POLITICS = 'politics',
    MOAN = 'moan',
    ABUSE = 'abuse'
}
