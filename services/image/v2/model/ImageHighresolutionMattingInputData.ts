

export class ImageHighresolutionMattingInputData {
    public url?: string;
    public key?: string;
    public constructor() { 
    }
    public withUrl(url: string): ImageHighresolutionMattingInputData {
        this['url'] = url;
        return this;
    }
    public withKey(key: string): ImageHighresolutionMattingInputData {
        this['key'] = key;
        return this;
    }
}