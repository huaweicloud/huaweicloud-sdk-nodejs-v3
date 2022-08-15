

export class AudioInputBody {
    public url: string;
    public constructor(url?: any) { 
        this['url'] = url;
    }
    public withUrl(url: string): AudioInputBody {
        this['url'] = url;
        return this;
    }
}