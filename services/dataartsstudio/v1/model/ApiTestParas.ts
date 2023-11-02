

export class ApiTestParas {
    private 'page_size'?: string;
    private 'page_num'?: string;
    public constructor() { 
    }
    public withPageSize(pageSize: string): ApiTestParas {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): string | undefined {
        return this['page_size'];
    }
    public withPageNum(pageNum: string): ApiTestParas {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: string  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): string | undefined {
        return this['page_num'];
    }
}