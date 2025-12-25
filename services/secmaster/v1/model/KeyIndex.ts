

export class KeyIndex {
    private 'is_chinese_exist'?: boolean;
    public properties?: { [key: string]: KeyIndex; };
    public type?: KeyIndexTypeEnum | string;
    public constructor() { 
    }
    public withIsChineseExist(isChineseExist: boolean): KeyIndex {
        this['is_chinese_exist'] = isChineseExist;
        return this;
    }
    public set isChineseExist(isChineseExist: boolean  | undefined) {
        this['is_chinese_exist'] = isChineseExist;
    }
    public get isChineseExist(): boolean | undefined {
        return this['is_chinese_exist'];
    }
    public withProperties(properties: { [key: string]: KeyIndex; }): KeyIndex {
        this['properties'] = properties;
        return this;
    }
    public withType(type: KeyIndexTypeEnum | string): KeyIndex {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeyIndexTypeEnum {
    TEXT = 'text',
    KEYWORD = 'keyword',
    LONG = 'long',
    INTEGER = 'integer',
    DOUBLE = 'double',
    FLOAT = 'float',
    DATE = 'date'
}
