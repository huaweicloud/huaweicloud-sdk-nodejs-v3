

export class BigkeysBody {
    public name?: string;
    public type?: BigkeysBodyTypeEnum;
    public shard?: string;
    public db?: number;
    public size?: number;
    public unit?: string;
    public constructor() { 
    }
    public withName(name: string): BigkeysBody {
        this['name'] = name;
        return this;
    }
    public withType(type: BigkeysBodyTypeEnum): BigkeysBody {
        this['type'] = type;
        return this;
    }
    public withShard(shard: string): BigkeysBody {
        this['shard'] = shard;
        return this;
    }
    public withDb(db: number): BigkeysBody {
        this['db'] = db;
        return this;
    }
    public withSize(size: number): BigkeysBody {
        this['size'] = size;
        return this;
    }
    public withUnit(unit: string): BigkeysBody {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BigkeysBodyTypeEnum {
    STRING = 'string',
    LIST = 'list',
    SET = 'set',
    ZSET = 'zset',
    HASH = 'hash'
}
