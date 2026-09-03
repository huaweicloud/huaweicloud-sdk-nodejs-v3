

export class ListSqlLimitUserInstanceRequestBody {
    private 'engine_type'?: string;
    private 'page_num'?: number;
    private 'page_size'?: number;
    public constructor(engineType?: string) { 
        this['engine_type'] = engineType;
    }
    public withEngineType(engineType: string): ListSqlLimitUserInstanceRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withPageNum(pageNum: number): ListSqlLimitUserInstanceRequestBody {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ListSqlLimitUserInstanceRequestBody {
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