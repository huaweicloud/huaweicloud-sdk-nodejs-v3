import { SchemaObject } from './SchemaObject';
import { TableObject } from './TableObject';


export class DatabaseObject {
    private 'sync_type'?: DatabaseObjectSyncTypeEnum | string;
    public name?: string;
    public all?: boolean;
    public schemas?: { [key: string]: SchemaObject; };
    public tables?: { [key: string]: TableObject; };
    private 'total_table_num'?: number;
    private 'is_synchronized'?: boolean;
    public constructor() { 
    }
    public withSyncType(syncType: DatabaseObjectSyncTypeEnum | string): DatabaseObject {
        this['sync_type'] = syncType;
        return this;
    }
    public set syncType(syncType: DatabaseObjectSyncTypeEnum | string  | undefined) {
        this['sync_type'] = syncType;
    }
    public get syncType(): DatabaseObjectSyncTypeEnum | string | undefined {
        return this['sync_type'];
    }
    public withName(name: string): DatabaseObject {
        this['name'] = name;
        return this;
    }
    public withAll(all: boolean): DatabaseObject {
        this['all'] = all;
        return this;
    }
    public withSchemas(schemas: { [key: string]: SchemaObject; }): DatabaseObject {
        this['schemas'] = schemas;
        return this;
    }
    public withTables(tables: { [key: string]: TableObject; }): DatabaseObject {
        this['tables'] = tables;
        return this;
    }
    public withTotalTableNum(totalTableNum: number): DatabaseObject {
        this['total_table_num'] = totalTableNum;
        return this;
    }
    public set totalTableNum(totalTableNum: number  | undefined) {
        this['total_table_num'] = totalTableNum;
    }
    public get totalTableNum(): number | undefined {
        return this['total_table_num'];
    }
    public withIsSynchronized(isSynchronized: boolean): DatabaseObject {
        this['is_synchronized'] = isSynchronized;
        return this;
    }
    public set isSynchronized(isSynchronized: boolean  | undefined) {
        this['is_synchronized'] = isSynchronized;
    }
    public get isSynchronized(): boolean | undefined {
        return this['is_synchronized'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DatabaseObjectSyncTypeEnum {
    CONFIG = 'config'
}
