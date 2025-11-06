

export class ListTwoTemplatesRequest {
    public platform?: string;
    public language?: string;
    public pipeline?: string;
    private 'enter_type'?: string;
    public search?: string;
    private 'date_order'?: string;
    private 'used_time_order'?: string;
    public type?: string;
    public region?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor(pageNo?: number, pageSize?: number) { 
        this['page_no'] = pageNo;
        this['page_size'] = pageSize;
    }
    public withPlatform(platform: string): ListTwoTemplatesRequest {
        this['platform'] = platform;
        return this;
    }
    public withLanguage(language: string): ListTwoTemplatesRequest {
        this['language'] = language;
        return this;
    }
    public withPipeline(pipeline: string): ListTwoTemplatesRequest {
        this['pipeline'] = pipeline;
        return this;
    }
    public withEnterType(enterType: string): ListTwoTemplatesRequest {
        this['enter_type'] = enterType;
        return this;
    }
    public set enterType(enterType: string  | undefined) {
        this['enter_type'] = enterType;
    }
    public get enterType(): string | undefined {
        return this['enter_type'];
    }
    public withSearch(search: string): ListTwoTemplatesRequest {
        this['search'] = search;
        return this;
    }
    public withDateOrder(dateOrder: string): ListTwoTemplatesRequest {
        this['date_order'] = dateOrder;
        return this;
    }
    public set dateOrder(dateOrder: string  | undefined) {
        this['date_order'] = dateOrder;
    }
    public get dateOrder(): string | undefined {
        return this['date_order'];
    }
    public withUsedTimeOrder(usedTimeOrder: string): ListTwoTemplatesRequest {
        this['used_time_order'] = usedTimeOrder;
        return this;
    }
    public set usedTimeOrder(usedTimeOrder: string  | undefined) {
        this['used_time_order'] = usedTimeOrder;
    }
    public get usedTimeOrder(): string | undefined {
        return this['used_time_order'];
    }
    public withType(type: string): ListTwoTemplatesRequest {
        this['type'] = type;
        return this;
    }
    public withRegion(region: string): ListTwoTemplatesRequest {
        this['region'] = region;
        return this;
    }
    public withPageNo(pageNo: number): ListTwoTemplatesRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListTwoTemplatesRequest {
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