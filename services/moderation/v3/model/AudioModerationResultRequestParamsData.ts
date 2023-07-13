

export class AudioModerationResultRequestParamsData {
    public url?: string;
    public constructor() { 
    }
    public withUrl(url: string): AudioModerationResultRequestParamsData {
        this['url'] = url;
        return this;
    }
}