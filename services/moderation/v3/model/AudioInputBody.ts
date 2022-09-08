

export class AudioInputBody {
    public url?: string;
    public constructor() { 
    }
    public withUrl(url: string): AudioInputBody {
        this['url'] = url;
        return this;
    }
}