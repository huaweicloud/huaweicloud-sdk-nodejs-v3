import { AudioInputBody } from './AudioInputBody';


export class AudioCreateRequest {
    public data?: AudioInputBody;
    private 'biz_type'?: string;
    private 'event_type'?: AudioCreateRequestEventTypeEnum | string;
    public categories?: Array<AudioCreateRequestCategoriesEnum> | Array<string>;
    public callback?: string;
    public seed?: string;
    public constructor(data?: AudioInputBody) { 
        this['data'] = data;
    }
    public withData(data: AudioInputBody): AudioCreateRequest {
        this['data'] = data;
        return this;
    }
    public withBizType(bizType: string): AudioCreateRequest {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): string | undefined {
        return this['biz_type'];
    }
    public withEventType(eventType: AudioCreateRequestEventTypeEnum | string): AudioCreateRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: AudioCreateRequestEventTypeEnum | string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): AudioCreateRequestEventTypeEnum | string | undefined {
        return this['event_type'];
    }
    public withCategories(categories: Array<AudioCreateRequestCategoriesEnum> | Array<string>): AudioCreateRequest {
        this['categories'] = categories;
        return this;
    }
    public withCallback(callback: string): AudioCreateRequest {
        this['callback'] = callback;
        return this;
    }
    public withSeed(seed: string): AudioCreateRequest {
        this['seed'] = seed;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AudioCreateRequestEventTypeEnum {
    DEFAULT = 'default',
    AUDIOBOOK = 'audiobook',
    EDUCATION = 'education',
    GAME = 'game',
    LIVE = 'live',
    ECOMMERCE = 'ecommerce',
    VOICEROOM = 'voiceroom',
    PRIVATE = 'private'
}
/**
    * @export
    * @enum {string}
    */
export enum AudioCreateRequestCategoriesEnum {
    POLITICS = 'politics',
    PORN = 'porn',
    AD = 'ad',
    MOAN = 'moan',
    ABUSE = 'abuse'
}
