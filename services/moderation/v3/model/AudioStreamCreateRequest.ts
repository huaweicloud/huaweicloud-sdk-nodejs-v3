import { AudioStreamCreateRequestData } from './AudioStreamCreateRequestData';


export class AudioStreamCreateRequest {
    public data?: AudioStreamCreateRequestData;
    private 'event_type'?: string;
    public categories?: Array<string>;
    public callback?: string;
    public constructor(data?: AudioStreamCreateRequestData, eventType?: string, categories?: Array<string>, callback?: string) { 
        this['data'] = data;
        this['event_type'] = eventType;
        this['categories'] = categories;
        this['callback'] = callback;
    }
    public withData(data: AudioStreamCreateRequestData): AudioStreamCreateRequest {
        this['data'] = data;
        return this;
    }
    public withEventType(eventType: string): AudioStreamCreateRequest {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withCategories(categories: Array<string>): AudioStreamCreateRequest {
        this['categories'] = categories;
        return this;
    }
    public withCallback(callback: string): AudioStreamCreateRequest {
        this['callback'] = callback;
        return this;
    }
}