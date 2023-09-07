import { QueryColumnInfo } from './QueryColumnInfo';


export class DbObjectColumnInfo {
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'column_infos'?: Array<QueryColumnInfo>;
    private 'total_count'?: number;
    public constructor() { 
    }
    public withDbName(dbName: string): DbObjectColumnInfo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): DbObjectColumnInfo {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): DbObjectColumnInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withColumnInfos(columnInfos: Array<QueryColumnInfo>): DbObjectColumnInfo {
        this['column_infos'] = columnInfos;
        return this;
    }
    public set columnInfos(columnInfos: Array<QueryColumnInfo>  | undefined) {
        this['column_infos'] = columnInfos;
    }
    public get columnInfos(): Array<QueryColumnInfo> | undefined {
        return this['column_infos'];
    }
    public withTotalCount(totalCount: number): DbObjectColumnInfo {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}