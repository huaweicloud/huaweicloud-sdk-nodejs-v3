

export class TableMetaInfo {
    private 'column_type'?: string;
    public extra?: string;
    private 'is_nullable'?: string;
    private 'column_default'?: string;
    private 'column_key'?: string;
    private 'column_name'?: string;
    public constructor() { 
    }
    public withColumnType(columnType: string): TableMetaInfo {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): string | undefined {
        return this['column_type'];
    }
    public withExtra(extra: string): TableMetaInfo {
        this['extra'] = extra;
        return this;
    }
    public withIsNullable(isNullable: string): TableMetaInfo {
        this['is_nullable'] = isNullable;
        return this;
    }
    public set isNullable(isNullable: string  | undefined) {
        this['is_nullable'] = isNullable;
    }
    public get isNullable(): string | undefined {
        return this['is_nullable'];
    }
    public withColumnDefault(columnDefault: string): TableMetaInfo {
        this['column_default'] = columnDefault;
        return this;
    }
    public set columnDefault(columnDefault: string  | undefined) {
        this['column_default'] = columnDefault;
    }
    public get columnDefault(): string | undefined {
        return this['column_default'];
    }
    public withColumnKey(columnKey: string): TableMetaInfo {
        this['column_key'] = columnKey;
        return this;
    }
    public set columnKey(columnKey: string  | undefined) {
        this['column_key'] = columnKey;
    }
    public get columnKey(): string | undefined {
        return this['column_key'];
    }
    public withColumnName(columnName: string): TableMetaInfo {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
}