

export class RemoteMirrorDto {
    public url?: string;
    public constructor() { 
    }
    public withUrl(url: string): RemoteMirrorDto {
        this['url'] = url;
        return this;
    }
}