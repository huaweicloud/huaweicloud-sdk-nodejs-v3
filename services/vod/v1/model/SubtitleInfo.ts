

export class SubtitleInfo {
    public url?: string;
    public id?: number;
    public type?: string;
    public language?: string;
    public constructor() { 
    }
    public withUrl(url: string): SubtitleInfo {
        this['url'] = url;
        return this;
    }
    public withId(id: number): SubtitleInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: string): SubtitleInfo {
        this['type'] = type;
        return this;
    }
    public withLanguage(language: string): SubtitleInfo {
        this['language'] = language;
        return this;
    }
}