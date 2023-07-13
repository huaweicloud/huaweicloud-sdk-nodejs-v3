

export class PreheatingTaskRequestBody {
    public urls: Array<string>;
    public constructor(urls?: any) { 
        this['urls'] = urls;
    }
    public withUrls(urls: Array<string>): PreheatingTaskRequestBody {
        this['urls'] = urls;
        return this;
    }
}