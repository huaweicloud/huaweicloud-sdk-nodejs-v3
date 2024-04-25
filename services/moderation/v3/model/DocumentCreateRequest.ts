import { DocumentCreateRequestData } from './DocumentCreateRequestData';


export class DocumentCreateRequest {
    public data?: DocumentCreateRequestData;
    private 'event_type'?: string;
    private 'image_categories'?: Array<string>;
    private 'text_categories'?: Array<string>;
    private 'video_image_categories'?: Array<string>;
    private 'audio_categories'?: Array<string>;
    public callback?: string;
    public seed?: string;
    public constructor(data?: DocumentCreateRequestData, eventType?: string) { 
        this['data'] = data;
        this['event_type'] = eventType;
    }
    public withData(data: DocumentCreateRequestData): DocumentCreateRequest {
        this['data'] = data;
        return this;
    }
    public withEventType(eventType: string): DocumentCreateRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withImageCategories(imageCategories: Array<string>): DocumentCreateRequest {
        this['image_categories'] = imageCategories;
        return this;
    }
    public set imageCategories(imageCategories: Array<string>  | undefined) {
        this['image_categories'] = imageCategories;
    }
    public get imageCategories(): Array<string> | undefined {
        return this['image_categories'];
    }
    public withTextCategories(textCategories: Array<string>): DocumentCreateRequest {
        this['text_categories'] = textCategories;
        return this;
    }
    public set textCategories(textCategories: Array<string>  | undefined) {
        this['text_categories'] = textCategories;
    }
    public get textCategories(): Array<string> | undefined {
        return this['text_categories'];
    }
    public withVideoImageCategories(videoImageCategories: Array<string>): DocumentCreateRequest {
        this['video_image_categories'] = videoImageCategories;
        return this;
    }
    public set videoImageCategories(videoImageCategories: Array<string>  | undefined) {
        this['video_image_categories'] = videoImageCategories;
    }
    public get videoImageCategories(): Array<string> | undefined {
        return this['video_image_categories'];
    }
    public withAudioCategories(audioCategories: Array<string>): DocumentCreateRequest {
        this['audio_categories'] = audioCategories;
        return this;
    }
    public set audioCategories(audioCategories: Array<string>  | undefined) {
        this['audio_categories'] = audioCategories;
    }
    public get audioCategories(): Array<string> | undefined {
        return this['audio_categories'];
    }
    public withCallback(callback: string): DocumentCreateRequest {
        this['callback'] = callback;
        return this;
    }
    public withSeed(seed: string): DocumentCreateRequest {
        this['seed'] = seed;
        return this;
    }
}