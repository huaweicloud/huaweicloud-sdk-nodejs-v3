

export class EtlRequestBody {
    public offset?: number;
    public limit?: number;
    private 'table_name'?: string;
    private 'is_bak'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'filter_time_field'?: string;
    private 'sort_field'?: string;
    private 'schema_no'?: string;
    public constructor(offset?: number, limit?: number, tableName?: string, schemaNo?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['table_name'] = tableName;
        this['schema_no'] = schemaNo;
    }
    public withOffset(offset: number): EtlRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): EtlRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withTableName(tableName: string): EtlRequestBody {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withIsBak(isBak: string): EtlRequestBody {
        this['is_bak'] = isBak;
        return this;
    }
    public set isBak(isBak: string  | undefined) {
        this['is_bak'] = isBak;
    }
    public get isBak(): string | undefined {
        return this['is_bak'];
    }
    public withStartTime(startTime: string): EtlRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): EtlRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withFilterTimeField(filterTimeField: string): EtlRequestBody {
        this['filter_time_field'] = filterTimeField;
        return this;
    }
    public set filterTimeField(filterTimeField: string  | undefined) {
        this['filter_time_field'] = filterTimeField;
    }
    public get filterTimeField(): string | undefined {
        return this['filter_time_field'];
    }
    public withSortField(sortField: string): EtlRequestBody {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withSchemaNo(schemaNo: string): EtlRequestBody {
        this['schema_no'] = schemaNo;
        return this;
    }
    public set schemaNo(schemaNo: string  | undefined) {
        this['schema_no'] = schemaNo;
    }
    public get schemaNo(): string | undefined {
        return this['schema_no'];
    }
}