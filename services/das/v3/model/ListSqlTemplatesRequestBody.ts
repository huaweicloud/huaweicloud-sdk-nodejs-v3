

export class ListSqlTemplatesRequestBody {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    public operation?: string;
    private 'db_name_list'?: Array<string>;
    public keyword?: string;
    private 'sql_template_id'?: string;
    public sort?: string;
    public asc?: boolean;
    public size?: number;
    public constructor(instanceId?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): ListSqlTemplatesRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListSqlTemplatesRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartAt(startAt: number): ListSqlTemplatesRequestBody {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListSqlTemplatesRequestBody {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withOperation(operation: string): ListSqlTemplatesRequestBody {
        this['operation'] = operation;
        return this;
    }
    public withDbNameList(dbNameList: Array<string>): ListSqlTemplatesRequestBody {
        this['db_name_list'] = dbNameList;
        return this;
    }
    public set dbNameList(dbNameList: Array<string>  | undefined) {
        this['db_name_list'] = dbNameList;
    }
    public get dbNameList(): Array<string> | undefined {
        return this['db_name_list'];
    }
    public withKeyword(keyword: string): ListSqlTemplatesRequestBody {
        this['keyword'] = keyword;
        return this;
    }
    public withSqlTemplateId(sqlTemplateId: string): ListSqlTemplatesRequestBody {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withSort(sort: string): ListSqlTemplatesRequestBody {
        this['sort'] = sort;
        return this;
    }
    public withAsc(asc: boolean): ListSqlTemplatesRequestBody {
        this['asc'] = asc;
        return this;
    }
    public withSize(size: number): ListSqlTemplatesRequestBody {
        this['size'] = size;
        return this;
    }
}