

export class Columns {
    public name?: string;
    public type?: ColumnsTypeEnum | string;
    private 'primary_key'?: boolean;
    public constructor(name?: string, type?: string, primaryKey?: boolean) { 
        this['name'] = name;
        this['type'] = type;
        this['primary_key'] = primaryKey;
    }
    public withName(name: string): Columns {
        this['name'] = name;
        return this;
    }
    public withType(type: ColumnsTypeEnum | string): Columns {
        this['type'] = type;
        return this;
    }
    public withPrimaryKey(primaryKey: boolean): Columns {
        this['primary_key'] = primaryKey;
        return this;
    }
    public set primaryKey(primaryKey: boolean  | undefined) {
        this['primary_key'] = primaryKey;
    }
    public get primaryKey(): boolean | undefined {
        return this['primary_key'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ColumnsTypeEnum {
    INTEGER = 'INTEGER',
    STRING = 'STRING',
    DOUBLE = 'DOUBLE'
}
