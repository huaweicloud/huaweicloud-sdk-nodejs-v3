

export class AudioInputBody {
    public url?: string;
    public constructor(url?: string) { 
        this['url'] = url;
    }
    public withUrl(url: string): AudioInputBody {
        this['url'] = url;
        return this;
    }
}