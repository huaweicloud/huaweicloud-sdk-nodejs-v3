import { TableObject } from './TableObject';


export class SchemaObject {
    private 'sync_type'?: string | undefined;
    public name?: string;
    public all?: boolean;
    public tables?: { [key: string]: TableObject; };
    public constructor() { 
    }
    public withSyncType(syncType: string): SchemaObject {
        this['sync_type'] = syncType;
        return this;
    }
    public set syncType(syncType: string | undefined) {
        this['sync_type'] = syncType;
    }
    public get syncType() {
        return this['sync_type'];
    }
    public withName(name: string): SchemaObject {
        this['name'] = name;
        return this;
    }
    public withAll(all: boolean): SchemaObject {
        this['all'] = all;
        return this;
    }
    public withTables(tables: { [key: string]: TableObject; }): SchemaObject {
        this['tables'] = tables;
        return this;
    }
}