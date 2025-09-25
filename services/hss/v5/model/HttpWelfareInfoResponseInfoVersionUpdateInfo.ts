

export class HttpWelfareInfoResponseInfoVersionUpdateInfo {
    public title?: string;
    private 'url_json'?: string;
    public constructor() { 
    }
    public withTitle(title: string): HttpWelfareInfoResponseInfoVersionUpdateInfo {
        this['title'] = title;
        return this;
    }
    public withUrlJson(urlJson: string): HttpWelfareInfoResponseInfoVersionUpdateInfo {
        this['url_json'] = urlJson;
        return this;
    }
    public set urlJson(urlJson: string  | undefined) {
        this['url_json'] = urlJson;
    }
    public get urlJson(): string | undefined {
        return this['url_json'];
    }
}