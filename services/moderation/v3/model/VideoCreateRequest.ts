import { VideoCreateRequestData } from './VideoCreateRequestData';


export class VideoCreateRequest {
    public data: VideoCreateRequestData;
    private 'event_type': VideoCreateRequestEventTypeEnum | undefined;
    private 'image_categories': Array<VideoCreateRequestImageCategoriesEnum> | undefined;
    private 'audio_categories'?: Array<VideoCreateRequestAudioCategoriesEnum> | undefined;
    public callback?: string;
    public constructor(data?: any, eventType?: any, imageCategories?: any) { 
        this['data'] = data;
        this['event_type'] = eventType;
        this['image_categories'] = imageCategories;
    }
    public withData(data: VideoCreateRequestData): VideoCreateRequest {
        this['data'] = data;
        return this;
    }
    public withEventType(eventType: VideoCreateRequestEventTypeEnum): VideoCreateRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: VideoCreateRequestEventTypeEnum | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType() {
        return this['event_type'];
    }
    public withImageCategories(imageCategories: Array<VideoCreateRequestImageCategoriesEnum>): VideoCreateRequest {
        this['image_categories'] = imageCategories;
        return this;
    }
    public set imageCategories(imageCategories: Array<VideoCreateRequestImageCategoriesEnum> | undefined) {
        this['image_categories'] = imageCategories;
    }
    public get imageCategories() {
        return this['image_categories'];
    }
    public withAudioCategories(audioCategories: Array<VideoCreateRequestAudioCategoriesEnum>): VideoCreateRequest {
        this['audio_categories'] = audioCategories;
        return this;
    }
    public set audioCategories(audioCategories: Array<VideoCreateRequestAudioCategoriesEnum> | undefined) {
        this['audio_categories'] = audioCategories;
    }
    public get audioCategories() {
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
