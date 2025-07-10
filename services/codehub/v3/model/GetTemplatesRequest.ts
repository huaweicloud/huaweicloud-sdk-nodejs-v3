

export class GetTemplatesRequest {
    public platform?: string;
    public language?: string;
    public pipeline?: string;
    public entertype?: string;
    public search?: string;
    public dateorder?: string;
    public usedtimeorder?: string;
    public type?: string;
    public region?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor(pageNo?: number, pageSize?: number) { 
        this['page_no'] = pageNo;
        this['page_size'] = pageSize;
    }
    public withPlatform(platform: string): GetTemplatesRequest {
        this['platform'] = platform;
        return this;
    }
    public withLanguage(language: string): GetTemplatesRequest {
        this['language'] = language;
        return this;
    }
    public withPipeline(pipeline: string): GetTemplatesRequest {
        this['pipeline'] = pipeline;
        return this;
    }
    public withEntertype(entertype: string): GetTemplatesRequest {
        this['entertype'] = entertype;
        return this;
    }
    public withSearch(search: string): GetTemplatesRequest {
        this['search'] = search;
        return this;
    }
    public withDateorder(dateorder: string): GetTemplatesRequest {
        this['dateorder'] = dateorder;
        return this;
    }
    public withUsedtimeorder(usedtimeorder: string): GetTemplatesRequest {
        this['usedtimeorder'] = usedtimeorder;
        return this;
    }
    public withType(type: string): GetTemplatesRequest {
        this['type'] = type;
        return this;
    }
    public withRegion(region: string): GetTemplatesRequest {
        this['region'] = region;
        return this;
    }
    public withPageNo(pageNo: number): GetTemplatesRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): GetTemplatesRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}