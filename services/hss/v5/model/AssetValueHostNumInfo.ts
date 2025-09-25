

export class AssetValueHostNumInfo {
    private 'value_type'?: AssetValueHostNumInfoValueTypeEnum | string;
    private 'host_num'?: number;
    public constructor() { 
    }
    public withValueType(valueType: AssetValueHostNumInfoValueTypeEnum | string): AssetValueHostNumInfo {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: AssetValueHostNumInfoValueTypeEnum | string  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): AssetValueHostNumInfoValueTypeEnum | string | undefined {
        return this['value_type'];
    }
    public withHostNum(hostNum: number): AssetValueHostNumInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AssetValueHostNumInfoValueTypeEnum {
    IMPORTANT = 'important',
    COMMON = 'common',
    TEST = 'test'
}
