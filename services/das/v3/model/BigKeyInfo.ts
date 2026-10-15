

export class BigKeyInfo {
    public name?: string;
    public type?: BigKeyInfoTypeEnum | string;
    public size?: number;
    private 'db_id'?: string;
    public constructor() { 
    }
    public withName(name: string): BigKeyInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: BigKeyInfoTypeEnum | string): BigKeyInfo {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): BigKeyInfo {
        this['size'] = size;
        return this;
    }
    public withDbId(dbId: string): BigKeyInfo {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BigKeyInfoTypeEnum {
    STRING = 'string',
    HASH = 'hash',
    LIST = 'list',
    ZSET = 'zset',
    SET = 'set',
    STREAM = 'stream',
    EXHASH = 'exhash'
}
