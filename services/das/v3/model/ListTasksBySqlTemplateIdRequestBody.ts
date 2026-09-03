

export class ListTasksBySqlTemplateIdRequestBody {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'range_left'?: number;
    private 'range_right'?: number;
    private 'sql_template_id'?: string;
    private 'page_size'?: number;
    private 'cur_page'?: number;
    public constructor(instanceId?: string, sqlTemplateId?: string) { 
        this['instance_id'] = instanceId;
        this['sql_template_id'] = sqlTemplateId;
    }
    public withInstanceId(instanceId: string): ListTasksBySqlTemplateIdRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListTasksBySqlTemplateIdRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withRangeLeft(rangeLeft: number): ListTasksBySqlTemplateIdRequestBody {
        this['range_left'] = rangeLeft;
        return this;
    }
    public set rangeLeft(rangeLeft: number  | undefined) {
        this['range_left'] = rangeLeft;
    }
    public get rangeLeft(): number | undefined {
        return this['range_left'];
    }
    public withRangeRight(rangeRight: number): ListTasksBySqlTemplateIdRequestBody {
        this['range_right'] = rangeRight;
        return this;
    }
    public set rangeRight(rangeRight: number  | undefined) {
        this['range_right'] = rangeRight;
    }
    public get rangeRight(): number | undefined {
        return this['range_right'];
    }
    public withSqlTemplateId(sqlTemplateId: string): ListTasksBySqlTemplateIdRequestBody {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withPageSize(pageSize: number): ListTasksBySqlTemplateIdRequestBody {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withCurPage(curPage: number): ListTasksBySqlTemplateIdRequestBody {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
}