import { IndexUsageCondition } from './IndexUsageCondition';


export class ListIndexUsageDetailsRequestBody {
    public conditions?: Array<IndexUsageCondition>;
    private 'object_name'?: string;
    private 'sort_field'?: string;
    private 'sort_asc'?: boolean;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    public constructor(conditions?: Array<IndexUsageCondition>) { 
        this['conditions'] = conditions;
    }
    public withConditions(conditions: Array<IndexUsageCondition>): ListIndexUsageDetailsRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withObjectName(objectName: string): ListIndexUsageDetailsRequestBody {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withSortField(sortField: string): ListIndexUsageDetailsRequestBody {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortAsc(sortAsc: boolean): ListIndexUsageDetailsRequestBody {
        this['sort_asc'] = sortAsc;
        return this;
    }
    public set sortAsc(sortAsc: boolean  | undefined) {
        this['sort_asc'] = sortAsc;
    }
    public get sortAsc(): boolean | undefined {
        return this['sort_asc'];
    }
    public withCurPage(curPage: number): ListIndexUsageDetailsRequestBody {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): ListIndexUsageDetailsRequestBody {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}