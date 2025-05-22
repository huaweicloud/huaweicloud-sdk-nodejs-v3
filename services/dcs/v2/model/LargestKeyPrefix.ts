

export class LargestKeyPrefix {
    private 'key_prefix'?: string;
    public type?: LargestKeyPrefixTypeEnum | string;
    public bytes?: number;
    public num?: number;
    public constructor() { 
    }
    public withKeyPrefix(keyPrefix: string): LargestKeyPrefix {
        this['key_prefix'] = keyPrefix;
        return this;
    }
    public set keyPrefix(keyPrefix: string  | undefined) {
        this['key_prefix'] = keyPrefix;
    }
    public get keyPrefix(): string | undefined {
        return this['key_prefix'];
    }
    public withType(type: LargestKeyPrefixTypeEnum | string): LargestKeyPrefix {
        this['type'] = type;
        return this;
    }
    public withBytes(bytes: number): LargestKeyPrefix {
        this['bytes'] = bytes;
        return this;
    }
    public withNum(num: number): LargestKeyPrefix {
        this['num'] = num;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LargestKeyPrefixTypeEnum {
    STRING = 'string',
    LIST = 'list',
    SET = 'set',
    ZSET = 'zset',
    HASH = 'hash'
}
