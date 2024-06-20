

export class AudioInputBody {
    public url?: string;
    public language?: string;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withUrl(url: string): AudioInputBody {
        this['url'] = url;
        return this;
    }
    public withLanguage(language: string): AudioInputBody {
        this['language'] = language;
        return this;
    }
}