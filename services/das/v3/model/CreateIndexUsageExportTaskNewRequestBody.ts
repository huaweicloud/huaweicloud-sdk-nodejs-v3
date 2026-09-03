import { IndexUsageCondition } from './IndexUsageCondition';


export class CreateIndexUsageExportTaskNewRequestBody {
    private 'export_type'?: string;
    private 'collect_time'?: number;
    private 'bucket_name'?: string;
    public conditions?: Array<IndexUsageCondition>;
    private 'object_name'?: string;
    private 'sort_field'?: string;
    private 'sort_asc'?: boolean;
    private 'cur_page'?: number;
    private 'per_page'?: number;
    public constructor(exportType?: string, collectTime?: number, bucketName?: string) { 
        this['export_type'] = exportType;
        this['collect_time'] = collectTime;
        this['bucket_name'] = bucketName;
    }
    public withExportType(exportType: string): CreateIndexUsageExportTaskNewRequestBody {
        this['export_type'] = exportType;
        return this;
    }
    public set exportType(exportType: string  | undefined) {
        this['export_type'] = exportType;
    }
    public get exportType(): string | undefined {
        return this['export_type'];
    }
    public withCollectTime(collectTime: number): CreateIndexUsageExportTaskNewRequestBody {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
    public withBucketName(bucketName: string): CreateIndexUsageExportTaskNewRequestBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withConditions(conditions: Array<IndexUsageCondition>): CreateIndexUsageExportTaskNewRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withObjectName(objectName: string): CreateIndexUsageExportTaskNewRequestBody {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withSortField(sortField: string): CreateIndexUsageExportTaskNewRequestBody {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSortAsc(sortAsc: boolean): CreateIndexUsageExportTaskNewRequestBody {
        this['sort_asc'] = sortAsc;
        return this;
    }
    public set sortAsc(sortAsc: boolean  | undefined) {
        this['sort_asc'] = sortAsc;
    }
    public get sortAsc(): boolean | undefined {
        return this['sort_asc'];
    }
    public withCurPage(curPage: number): CreateIndexUsageExportTaskNewRequestBody {
        this['cur_page'] = curPage;
        return this;
    }
    public set curPage(curPage: number  | undefined) {
        this['cur_page'] = curPage;
    }
    public get curPage(): number | undefined {
        return this['cur_page'];
    }
    public withPerPage(perPage: number): CreateIndexUsageExportTaskNewRequestBody {
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