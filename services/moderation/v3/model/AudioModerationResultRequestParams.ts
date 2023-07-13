import { AudioModerationResultRequestParamsData } from './AudioModerationResultRequestParamsData';


export class AudioModerationResultRequestParams {
    private 'event_type'?: string | undefined;
    public data?: AudioModerationResultRequestParamsData;
    public callback?: string;
    public categories?: Array<string>;
    public constructor() { 
    }
    public withEventType(eventType: string): AudioModerationResultRequestParams {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType() {
        return this['event_type'];
    }
    public withData(data: AudioModerationResultRequestParamsData): AudioModerationResultRequestParams {
        this['data'] = data;
        return this;
    }
    public withCallback(callback: string): AudioModerationResultRequestParams {
        this['callback'] = callback;
        return this;
    }
    public withCategories(categories: Array<string>): AudioModerationResultRequestParams {
        this['categories'] = categories;
        return this;
    }
}