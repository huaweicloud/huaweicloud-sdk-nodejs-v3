import { ColumnObject } from './ColumnObject';


export class TableObject {
    private 'sync_type'?: string | undefined;
    public type?: TableObjectTypeEnum;
    public name?: string;
    public all?: boolean;
    private 'db_alias_name'?: string | undefined;
    private 'schema_alias_name'?: string | undefined;
    public filtered?: boolean;
    private 'filter_conditions'?: Array<string> | undefined;
    private 'config_conditions'?: Array<string> | undefined;
    private 'is_synchronized'?: boolean | undefined;
    public columns?: { [key: string]: ColumnObject; };
    public constructor() { 
    }
    public withSyncType(syncType: string): TableObject {
        this['sync_type'] = syncType;
        return this;
    }
    public set syncType(syncType: string | undefined) {
        this['sync_type'] = syncType;
    }
    public get syncType() {
        return this['sync_type'];
    }
    public withType(type: TableObjectTypeEnum): TableObject {
        this['type'] = type;
        return this;
    }
    public withName(name: string): TableObject {
        this['name'] = name;
        return this;
    }
    public withAll(all: boolean): TableObject {
        this['all'] = all;
        return this;
    }
    public withDbAliasName(dbAliasName: string): TableObject {
        this['db_alias_name'] = dbAliasName;
        return this;
    }
    public set dbAliasName(dbAliasName: string | undefined) {
        this['db_alias_name'] = dbAliasName;
    }
    public get dbAliasName() {
        return this['db_alias_name'];
    }
    public withSchemaAliasName(schemaAliasName: string): TableObject {
        this['schema_alias_name'] = schemaAliasName;
        return this;
    }
    public set schemaAliasName(schemaAliasName: string | undefined) {
        this['schema_alias_name'] = schemaAliasName;
    }
    public get schemaAliasName() {
        return this['schema_alias_name'];
    }
    public withFiltered(filtered: boolean): TableObject {
        this['filtered'] = filtered;
        return this;
    }
    public withFilterConditions(filterConditions: Array<string>): TableObject {
        this['filter_conditions'] = filterConditions;
        return this;
    }
    public set filterConditions(filterConditions: Array<string> | undefined) {
        this['filter_conditions'] = filterConditions;
    }
    public get filterConditions() {
        return this['filter_conditions'];
    }
    public withConfigConditions(configConditions: Array<string>): TableObject {
        this['config_conditions'] = configConditions;
        return this;
    }
    public set configConditions(configConditions: Array<string> | undefined) {
        this['config_conditions'] = configConditions;
    }
    public get configConditions() {
        return this['config_conditions'];
    }
    public withIsSynchronized(isSynchronized: boolean): TableObject {
        this['is_synchronized'] = isSynchronized;
        return this;
    }
    public set isSynchronized(isSynchronized: boolean | undefined) {
        this['is_synchronized'] = isSynchronized;
    }
    public get isSynchronized() {
        return this['is_synchronized'];
    }
    public withColumns(columns: { [key: string]: ColumnObject; }): TableObject {
        this['columns'] = columns;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TableObjectTypeEnum {
    TABLE = 'table',
    VIEW = 'view',
    PROCEDURE = 'procedure'
}
