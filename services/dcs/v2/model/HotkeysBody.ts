

export class HotkeysBody {
    public name?: string;
    public type?: HotkeysBodyTypeEnum;
    public shard?: string;
    public db?: number;
    public size?: number;
    public unit?: string;
    public freq?: number;
    public constructor() { 
    }
    public withName(name: string): HotkeysBody {
        this['name'] = name;
        return this;
    }
    public withType(type: HotkeysBodyTypeEnum): HotkeysBody {
        this['type'] = type;
        return this;
    }
    public withShard(shard: string): HotkeysBody {
        this['shard'] = shard;
        return this;
    }
    public withDb(db: number): HotkeysBody {
        this['db'] = db;
        return this;
    }
    public withSize(size: number): HotkeysBody {
        this['size'] = size;
        return this;
    }
    public withUnit(unit: string): HotkeysBody {
        this['unit'] = unit;
        return this;
    }
    public withFreq(freq: number): HotkeysBody {
        this['freq'] = freq;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HotkeysBodyTypeEnum {
    STRING = 'string',
    LIST = 'list',
    SET = 'set',
    ZSET = 'zset',
    HASH = 'hash'
}
