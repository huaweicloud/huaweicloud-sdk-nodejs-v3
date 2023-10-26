

export class ListTemplateByJobIdRequestBody {
    public name?: string;
    private 'page_num'?: number;
    private 'page_size'?: number;
    private 'order_by_column'?: string;
    private 'sort_order'?: string;
    public constructor(orderByColumn?: string) { 
        this['order_by_column'] = orderByColumn;
    }
    public withName(name: string): ListTemplateByJobIdRequestBody {
        this['name'] = name;
        return this;
    }
    public withPageNum(pageNum: number): ListTemplateByJobIdRequestBody {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ListTemplateByJobIdRequestBody {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withOrderByColumn(orderByColumn: string): ListTemplateByJobIdRequestBody {
        this['order_by_column'] = orderByColumn;
        return this;
    }
    public set orderByColumn(orderByColumn: string  | undefined) {
        this['order_by_column'] = orderByColumn;
    }
    public get orderByColumn(): string | undefined {
        return this['order_by_column'];
    }
    public withSortOrder(sortOrder: string): ListTemplateByJobIdRequestBody {
        this['sort_order'] = sortOrder;
        return this;
    }
    public set sortOrder(sortOrder: string  | undefined) {
        this['sort_order'] = sortOrder;
    }
    public get sortOrder(): string | undefined {
        return this['sort_order'];
    }
}