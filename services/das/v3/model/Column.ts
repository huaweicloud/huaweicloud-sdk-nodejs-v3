

export class Column {
    private 'auto_increment'?: boolean;
    private 'data_type'?: string;
    private 'db_name'?: string;
    public label?: string;
    public name?: string;
    private 'real_name'?: string;
    public size?: number;
    private 'table_name'?: string;
    private 'schema_name'?: string;
    public readonly?: boolean;
    private 'is_binary'?: boolean;
    private 'int_data_type'?: number;
    public constructor() { 
    }
    public withAutoIncrement(autoIncrement: boolean): Column {
        this['auto_increment'] = autoIncrement;
        return this;
    }
    public set autoIncrement(autoIncrement: boolean  | undefined) {
        this['auto_increment'] = autoIncrement;
    }
    public get autoIncrement(): boolean | undefined {
        return this['auto_increment'];
    }
    public withDataType(dataType: string): Column {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withDbName(dbName: string): Column {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withLabel(label: string): Column {
        this['label'] = label;
        return this;
    }
    public withName(name: string): Column {
        this['name'] = name;
        return this;
    }
    public withRealName(realName: string): Column {
        this['real_name'] = realName;
        return this;
    }
    public set realName(realName: string  | undefined) {
        this['real_name'] = realName;
    }
    public get realName(): string | undefined {
        return this['real_name'];
    }
    public withSize(size: number): Column {
        this['size'] = size;
        return this;
    }
    public withTableName(tableName: string): Column {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withSchemaName(schemaName: string): Column {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withReadonly(readonly: boolean): Column {
        this['readonly'] = readonly;
        return this;
    }
    public withIsBinary(isBinary: boolean): Column {
        this['is_binary'] = isBinary;
        return this;
    }
    public set isBinary(isBinary: boolean  | undefined) {
        this['is_binary'] = isBinary;
    }
    public get isBinary(): boolean | undefined {
        return this['is_binary'];
    }
    public withIntDataType(intDataType: number): Column {
        this['int_data_type'] = intDataType;
        return this;
    }
    public set intDataType(intDataType: number  | undefined) {
        this['int_data_type'] = intDataType;
    }
    public get intDataType(): number | undefined {
        return this['int_data_type'];
    }
}