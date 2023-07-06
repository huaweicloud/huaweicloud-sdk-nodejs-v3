

export class ConfigTransformationVo {
    private 'db_table_name': string | undefined;
    private 'db_name': string | undefined;
    private 'table_name': string | undefined;
    private 'col_names': string | undefined;
    private 'prim_key_or_index': string | undefined;
    public indexs: string;
    public values: string;
    public constructor(dbTableName?: any, dbName?: any, tableName?: any, colNames?: any, primKeyOrIndex?: any, indexs?: any, values?: any) { 
        this['db_table_name'] = dbTableName;
        this['db_name'] = dbName;
        this['table_name'] = tableName;
        this['col_names'] = colNames;
        this['prim_key_or_index'] = primKeyOrIndex;
        this['indexs'] = indexs;
        this['values'] = values;
    }
    public withDbTableName(dbTableName: string): ConfigTransformationVo {
        this['db_table_name'] = dbTableName;
        return this;
    }
    public set dbTableName(dbTableName: string | undefined) {
        this['db_table_name'] = dbTableName;
    }
    public get dbTableName() {
        return this['db_table_name'];
    }
    public withDbName(dbName: string): ConfigTransformationVo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName() {
        return this['db_name'];
    }
    public withTableName(tableName: string): ConfigTransformationVo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName() {
        return this['table_name'];
    }
    public withColNames(colNames: string): ConfigTransformationVo {
        this['col_names'] = colNames;
        return this;
    }
    public set colNames(colNames: string | undefined) {
        this['col_names'] = colNames;
    }
    public get colNames() {
        return this['col_names'];
    }
    public withPrimKeyOrIndex(primKeyOrIndex: string): ConfigTransformationVo {
        this['prim_key_or_index'] = primKeyOrIndex;
        return this;
    }
    public set primKeyOrIndex(primKeyOrIndex: string | undefined) {
        this['prim_key_or_index'] = primKeyOrIndex;
    }
    public get primKeyOrIndex() {
        return this['prim_key_or_index'];
    }
    public withIndexs(indexs: string): ConfigTransformationVo {
        this['indexs'] = indexs;
        return this;
    }
    public withValues(values: string): ConfigTransformationVo {
        this['values'] = values;
        return this;
    }
}