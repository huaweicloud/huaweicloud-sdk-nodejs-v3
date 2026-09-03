

export class ListSqlTemplateComparisonsRequestBody {
    private 'instance_id'?: string;
    private 'compare_type'?: string;
    private 'node_id'?: string;
    private 'node_id1'?: string;
    private 'node_id2'?: string;
    private 'start_at1'?: number;
    private 'end_at1'?: number;
    private 'start_at2'?: number;
    private 'end_at2'?: number;
    public operation?: string;
    private 'db_name_list'?: Array<string>;
    public keyword?: string;
    private 'sql_template_id'?: string;
    public sort?: string;
    public asc?: boolean;
    public size?: number;
    public constructor(instanceId?: string, startAt1?: number, endAt1?: number, startAt2?: number, endAt2?: number) { 
        this['instance_id'] = instanceId;
        this['start_at1'] = startAt1;
        this['end_at1'] = endAt1;
        this['start_at2'] = startAt2;
        this['end_at2'] = endAt2;
    }
    public withInstanceId(instanceId: string): ListSqlTemplateComparisonsRequestBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withCompareType(compareType: string): ListSqlTemplateComparisonsRequestBody {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): string | undefined {
        return this['compare_type'];
    }
    public withNodeId(nodeId: string): ListSqlTemplateComparisonsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeId1(nodeId1: string): ListSqlTemplateComparisonsRequestBody {
        this['node_id1'] = nodeId1;
        return this;
    }
    public set nodeId1(nodeId1: string  | undefined) {
        this['node_id1'] = nodeId1;
    }
    public get nodeId1(): string | undefined {
        return this['node_id1'];
    }
    public withNodeId2(nodeId2: string): ListSqlTemplateComparisonsRequestBody {
        this['node_id2'] = nodeId2;
        return this;
    }
    public set nodeId2(nodeId2: string  | undefined) {
        this['node_id2'] = nodeId2;
    }
    public get nodeId2(): string | undefined {
        return this['node_id2'];
    }
    public withStartAt1(startAt1: number): ListSqlTemplateComparisonsRequestBody {
        this['start_at1'] = startAt1;
        return this;
    }
    public set startAt1(startAt1: number  | undefined) {
        this['start_at1'] = startAt1;
    }
    public get startAt1(): number | undefined {
        return this['start_at1'];
    }
    public withEndAt1(endAt1: number): ListSqlTemplateComparisonsRequestBody {
        this['end_at1'] = endAt1;
        return this;
    }
    public set endAt1(endAt1: number  | undefined) {
        this['end_at1'] = endAt1;
    }
    public get endAt1(): number | undefined {
        return this['end_at1'];
    }
    public withStartAt2(startAt2: number): ListSqlTemplateComparisonsRequestBody {
        this['start_at2'] = startAt2;
        return this;
    }
    public set startAt2(startAt2: number  | undefined) {
        this['start_at2'] = startAt2;
    }
    public get startAt2(): number | undefined {
        return this['start_at2'];
    }
    public withEndAt2(endAt2: number): ListSqlTemplateComparisonsRequestBody {
        this['end_at2'] = endAt2;
        return this;
    }
    public set endAt2(endAt2: number  | undefined) {
        this['end_at2'] = endAt2;
    }
    public get endAt2(): number | undefined {
        return this['end_at2'];
    }
    public withOperation(operation: string): ListSqlTemplateComparisonsRequestBody {
        this['operation'] = operation;
        return this;
    }
    public withDbNameList(dbNameList: Array<string>): ListSqlTemplateComparisonsRequestBody {
        this['db_name_list'] = dbNameList;
        return this;
    }
    public set dbNameList(dbNameList: Array<string>  | undefined) {
        this['db_name_list'] = dbNameList;
    }
    public get dbNameList(): Array<string> | undefined {
        return this['db_name_list'];
    }
    public withKeyword(keyword: string): ListSqlTemplateComparisonsRequestBody {
        this['keyword'] = keyword;
        return this;
    }
    public withSqlTemplateId(sqlTemplateId: string): ListSqlTemplateComparisonsRequestBody {
        this['sql_template_id'] = sqlTemplateId;
        return this;
    }
    public set sqlTemplateId(sqlTemplateId: string  | undefined) {
        this['sql_template_id'] = sqlTemplateId;
    }
    public get sqlTemplateId(): string | undefined {
        return this['sql_template_id'];
    }
    public withSort(sort: string): ListSqlTemplateComparisonsRequestBody {
        this['sort'] = sort;
        return this;
    }
    public withAsc(asc: boolean): ListSqlTemplateComparisonsRequestBody {
        this['asc'] = asc;
        return this;
    }
    public withSize(size: number): ListSqlTemplateComparisonsRequestBody {
        this['size'] = size;
        return this;
    }
}