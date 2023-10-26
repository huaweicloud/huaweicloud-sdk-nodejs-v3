

export class PreheatingTaskRequestBody {
    private 'zh_url_encode'?: boolean;
    public urls?: Array<string>;
    public constructor(urls?: Array<string>) { 
        this['urls'] = urls;
    }
    public withZhUrlEncode(zhUrlEncode: boolean): PreheatingTaskRequestBody {
        this['zh_url_encode'] = zhUrlEncode;
        return this;
    }
    public set zhUrlEncode(zhUrlEncode: boolean  | undefined) {
        this['zh_url_encode'] = zhUrlEncode;
    }
    public get zhUrlEncode(): boolean | undefined {
        return this['zh_url_encode'];
    }
    public withUrls(urls: Array<string>): PreheatingTaskRequestBody {
        this['urls'] = urls;
        return this;
    }
}