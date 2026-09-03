

export class ListTemplateDatabaseComparisonsRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'start_at1'?: number;
    private 'end_at1'?: number;
    private 'start_at2'?: number;
    private 'end_at2'?: number;
    public operation?: string;
    private 'db_name_list'?: Array<string>;
    public keyword?: string;
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
    public withInstanceId(instanceId: string): ListTemplateDatabaseComparisonsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListTemplateDatabaseComparisonsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartAt1(startAt1: number): ListTemplateDatabaseComparisonsRequest {
        this['start_at1'] = startAt1;
        return this;
    }
    public set startAt1(startAt1: number  | undefined) {
        this['start_at1'] = startAt1;
    }
    public get startAt1(): number | undefined {
        return this['start_at1'];
    }
    public withEndAt1(endAt1: number): ListTemplateDatabaseComparisonsRequest {
        this['end_at1'] = endAt1;
        return this;
    }
    public set endAt1(endAt1: number  | undefined) {
        this['end_at1'] = endAt1;
    }
    public get endAt1(): number | undefined {
        return this['end_at1'];
    }
    public withStartAt2(startAt2: number): ListTemplateDatabaseComparisonsRequest {
        this['start_at2'] = startAt2;
        return this;
    }
    public set startAt2(startAt2: number  | undefined) {
        this['start_at2'] = startAt2;
    }
    public get startAt2(): number | undefined {
        return this['start_at2'];
    }
    public withEndAt2(endAt2: number): ListTemplateDatabaseComparisonsRequest {
        this['end_at2'] = endAt2;
        return this;
    }
    public set endAt2(endAt2: number  | undefined) {
        this['end_at2'] = endAt2;
    }
    public get endAt2(): number | undefined {
        return this['end_at2'];
    }
    public withOperation(operation: string): ListTemplateDatabaseComparisonsRequest {
        this['operation'] = operation;
        return this;
    }
    public withDbNameList(dbNameList: Array<string>): ListTemplateDatabaseComparisonsRequest {
        this['db_name_list'] = dbNameList;
        return this;
    }
    public set dbNameList(dbNameList: Array<string>  | undefined) {
        this['db_name_list'] = dbNameList;
    }
    public get dbNameList(): Array<string> | undefined {
        return this['db_name_list'];
    }
    public withKeyword(keyword: string): ListTemplateDatabaseComparisonsRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withSort(sort: string): ListTemplateDatabaseComparisonsRequest {
        this['sort'] = sort;
        return this;
    }
    public withAsc(asc: boolean): ListTemplateDatabaseComparisonsRequest {
        this['asc'] = asc;
        return this;
    }
    public withSize(size: number): ListTemplateDatabaseComparisonsRequest {
        this['size'] = size;
        return this;
    }
}