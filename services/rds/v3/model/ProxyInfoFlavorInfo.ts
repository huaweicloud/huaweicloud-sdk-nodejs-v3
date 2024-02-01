

export class ProxyInfoFlavorInfo {
    private 'group_type'?: ProxyInfoFlavorInfoGroupTypeEnum | string;
    public code?: string;
    public constructor() { 
    }
    public withGroupType(groupType: ProxyInfoFlavorInfoGroupTypeEnum | string): ProxyInfoFlavorInfo {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: ProxyInfoFlavorInfoGroupTypeEnum | string  | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType(): ProxyInfoFlavorInfoGroupTypeEnum | string | undefined {
        return this['group_type'];
    }
    public withCode(code: string): ProxyInfoFlavorInfo {
        this['code'] = code;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProxyInfoFlavorInfoGroupTypeEnum {
    X86 = 'X86',
    RAM = 'RAM'
}
