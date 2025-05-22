

export class KeyTypeByte {
    public type?: KeyTypeByteTypeEnum | string;
    public bytes?: number;
    public constructor() { 
    }
    public withType(type: KeyTypeByteTypeEnum | string): KeyTypeByte {
        this['type'] = type;
        return this;
    }
    public withBytes(bytes: number): KeyTypeByte {
        this['bytes'] = bytes;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeyTypeByteTypeEnum {
    STRING = 'string',
    LIST = 'list',
    SET = 'set',
    ZSET = 'zset',
    HASH = 'hash'
}
