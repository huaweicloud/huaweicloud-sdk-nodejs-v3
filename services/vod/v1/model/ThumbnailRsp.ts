

export class ThumbnailRsp {
    public offset?: number;
    public url?: string;
    public constructor(offset?: number, url?: string) { 
        this['offset'] = offset;
        this['url'] = url;
    }
    public withOffset(offset: number): ThumbnailRsp {
        this['offset'] = offset;
        return this;
    }
    public withUrl(url: string): ThumbnailRsp {
        this['url'] = url;
        return this;
    }
}