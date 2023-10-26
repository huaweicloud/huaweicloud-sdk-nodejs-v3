

export class AudioStreamCreateRequestData {
    public url?: string;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withUrl(url: string): AudioStreamCreateRequestData {
        this['url'] = url;
        return this;
    }
}