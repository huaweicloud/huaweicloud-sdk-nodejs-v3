

export class UrlRedirectionOptions {
    private 'url_include_list'?: string;
    private 'url_exclude_list'?: string;
    public constructor() { 
    }
    public withUrlIncludeList(urlIncludeList: string): UrlRedirectionOptions {
        this['url_include_list'] = urlIncludeList;
        return this;
    }
    public set urlIncludeList(urlIncludeList: string  | undefined) {
        this['url_include_list'] = urlIncludeList;
    }
    public get urlIncludeList(): string | undefined {
        return this['url_include_list'];
    }
    public withUrlExcludeList(urlExcludeList: string): UrlRedirectionOptions {
        this['url_exclude_list'] = urlExcludeList;
        return this;
    }
    public set urlExcludeList(urlExcludeList: string  | undefined) {
        this['url_exclude_list'] = urlExcludeList;
    }
    public get urlExcludeList(): string | undefined {
        return this['url_exclude_list'];
    }
}