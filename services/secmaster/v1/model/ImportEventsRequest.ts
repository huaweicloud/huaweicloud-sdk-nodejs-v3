import { Events } from './Events';


export class ImportEventsRequest {
    private 'X-Language'?: string;
    public body?: Events;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ImportEventsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: Events): ImportEventsRequest {
        this['body'] = body;
        return this;
    }
}