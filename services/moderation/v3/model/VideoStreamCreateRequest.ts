import { VideoStreamCreateRequestData } from './VideoStreamCreateRequestData';


export class VideoStreamCreateRequest {
    public data?: VideoStreamCreateRequestData;
    private 'event_type'?: VideoStreamCreateRequestEventTypeEnum | string;
    private 'image_categories'?: Array<VideoStreamCreateRequestImageCategoriesEnum> | Array<string>;
    private 'audio_categories'?: Array<VideoStreamCreateRequestAudioCategoriesEnum> | Array<string>;
    public callback?: string;
    public constructor(data?: VideoStreamCreateRequestData, eventType?: string, imageCategories?: Array<string>, callback?: string) { 
        this['data'] = data;
        this['event_type'] = eventType;
        this['image_categories'] = imageCategories;
        this['callback'] = callback;
    }
    public withData(data: VideoStreamCreateRequestData): VideoStreamCreateRequest {
        this['data'] = data;
        return this;
    }
    public withEventType(eventType: VideoStreamCreateRequestEventTypeEnum | string): VideoStreamCreateRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: VideoStreamCreateRequestEventTypeEnum | string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): VideoStreamCreateRequestEventTypeEnum | string | undefined {
        return this['event_type'];
    }
    public withImageCategories(imageCategories: Array<VideoStreamCreateRequestImageCategoriesEnum> | Array<string>): VideoStreamCreateRequest {
        this['image_categories'] = imageCategories;
        return this;
    }
    public set imageCategories(imageCategories: Array<VideoStreamCreateRequestImageCategoriesEnum> | Array<string>  | undefined) {
        this['image_categories'] = imageCategories;
    }
    public get imageCategories(): Array<VideoStreamCreateRequestImageCategoriesEnum> | Array<string> | undefined {
        return this['image_categories'];
    }
    public withAudioCategories(audioCategories: Array<VideoStreamCreateRequestAudioCategoriesEnum> | Array<string>): VideoStreamCreateRequest {
        this['audio_categories'] = audioCategories;
        return this;
    }
    public set audioCategories(audioCategories: Array<VideoStreamCreateRequestAudioCategoriesEnum> | Array<string>  | undefined) {
        this['audio_categories'] = audioCategories;
    }
    public get audioCategories(): Array<VideoStreamCreateRequestAudioCategoriesEnum> | Array<string> | undefined {
        return this['audio_categories'];
    }
    public withCallback(callback: string): VideoStreamCreateRequest {
        this['callback'] = callback;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoStreamCreateRequestEventTypeEnum {
    DEFAULT = 'default'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoStreamCreateRequestImageCategoriesEnum {
    PORN = 'porn',
    POLITICS = 'politics',
    TERRORISM = 'terrorism',
    IMAGE_TEXT = 'image_text'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoStreamCreateRequestAudioCategoriesEnum {
    PORN = 'porn',
    AD = 'ad',
    POLITICS = 'politics',
    MOAN = 'moan',
    ABUSE = 'abuse'
}
