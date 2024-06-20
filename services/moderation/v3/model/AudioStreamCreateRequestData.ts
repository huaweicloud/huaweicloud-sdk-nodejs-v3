

export class AudioStreamCreateRequestData {
    public url?: string;
    public language?: string;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withUrl(url: string): AudioStreamCreateRequestData {
        this['url'] = url;
        return this;
    }
    public withLanguage(language: string): AudioStreamCreateRequestData {
        this['language'] = language;
        return this;
    }
}