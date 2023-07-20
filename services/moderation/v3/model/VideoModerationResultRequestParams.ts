import { VideoModerationResultRequestParamsData } from './VideoModerationResultRequestParamsData';


export class VideoModerationResultRequestParams {
    public data?: VideoModerationResultRequestParamsData;
    private 'event_type'?: string;
    private 'image_categories'?: Array<string>;
    private 'audio_categories'?: Array<string>;
    public callback?: string;
    public constructor(data?: VideoModerationResultRequestParamsData, eventType?: string, imageCategories?: Array<string>) { 
        this['data'] = data;
        this['event_type'] = eventType;
        this['image_categories'] = imageCategories;
    }
    public withData(data: VideoModerationResultRequestParamsData): VideoModerationResultRequestParams {
        this['data'] = data;
        return this;
    }
    public withEventType(eventType: string): VideoModerationResultRequestParams {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withImageCategories(imageCategories: Array<string>): VideoModerationResultRequestParams {
        this['image_categories'] = imageCategories;
        return this;
    }
    public set imageCategories(imageCategories: Array<string>  | undefined) {
        this['image_categories'] = imageCategories;
    }
    public get imageCategories(): Array<string> | undefined {
        return this['image_categories'];
    }
    public withAudioCategories(audioCategories: Array<string>): VideoModerationResultRequestParams {
        this['audio_categories'] = audioCategories;
        return this;
    }
    public set audioCategories(audioCategories: Array<string>  | undefined) {
        this['audio_categories'] = audioCategories;
    }
    public get audioCategories(): Array<string> | undefined {
        return this['audio_categories'];
    }
    public withCallback(callback: string): VideoModerationResultRequestParams {
        this['callback'] = callback;
        return this;
    }
}