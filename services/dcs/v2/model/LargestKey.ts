

export class LargestKey {
    public key?: string;
    public type?: LargestKeyTypeEnum | string;
    public bytes?: number;
    private 'num_of_elem'?: number;
    public constructor() { 
    }
    public withKey(key: string): LargestKey {
        this['key'] = key;
        return this;
    }
    public withType(type: LargestKeyTypeEnum | string): LargestKey {
        this['type'] = type;
        return this;
    }
    public withBytes(bytes: number): LargestKey {
        this['bytes'] = bytes;
        return this;
    }
    public withNumOfElem(numOfElem: number): LargestKey {
        this['num_of_elem'] = numOfElem;
        return this;
    }
    public set numOfElem(numOfElem: number  | undefined) {
        this['num_of_elem'] = numOfElem;
    }
    public get numOfElem(): number | undefined {
        return this['num_of_elem'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LargestKeyTypeEnum {
    STRING = 'string',
    LIST = 'list',
    SET = 'set',
    ZSET = 'zset',
    HASH = 'hash'
}
