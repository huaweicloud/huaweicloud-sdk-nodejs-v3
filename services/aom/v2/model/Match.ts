

export class Match {
    public key?: string;
    public operate?: MatchOperateEnum | string;
    public value?: Array<string>;
    public constructor(key?: string, operate?: string) { 
        this['key'] = key;
        this['operate'] = operate;
    }
    public withKey(key: string): Match {
        this['key'] = key;
        return this;
    }
    public withOperate(operate: MatchOperateEnum | string): Match {
        this['operate'] = operate;
        return this;
    }
    public withValue(value: Array<string>): Match {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MatchOperateEnum {
    EQUALS = 'EQUALS',
    REGEX = 'REGEX',
    EXIST = 'EXIST'
}
