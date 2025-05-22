

export class KeyTypeNum {
    public type?: KeyTypeNumTypeEnum | string;
    public num?: number;
    public constructor() { 
    }
    public withType(type: KeyTypeNumTypeEnum | string): KeyTypeNum {
        this['type'] = type;
        return this;
    }
    public withNum(num: number): KeyTypeNum {
        this['num'] = num;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeyTypeNumTypeEnum {
    STRING = 'string',
    LIST = 'list',
    SET = 'set',
    ZSET = 'zset',
    HASH = 'hash'
}
