

export class BackendParamBase {
    public origin?: BackendParamBaseOriginEnum | string;
    public name?: string;
    public remark?: string;
    public location?: BackendParamBaseLocationEnum | string;
    public value?: string;
    public constructor(origin?: string, name?: string, location?: string, value?: string) { 
        this['origin'] = origin;
        this['name'] = name;
        this['location'] = location;
        this['value'] = value;
    }
    public withOrigin(origin: BackendParamBaseOriginEnum | string): BackendParamBase {
        this['origin'] = origin;
        return this;
    }
    public withName(name: string): BackendParamBase {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): BackendParamBase {
        this['remark'] = remark;
        return this;
    }
    public withLocation(location: BackendParamBaseLocationEnum | string): BackendParamBase {
        this['location'] = location;
        return this;
    }
    public withValue(value: string): BackendParamBase {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackendParamBaseOriginEnum {
    REQUEST = 'REQUEST',
    CONSTANT = 'CONSTANT',
    SYSTEM = 'SYSTEM'
}
/**
    * @export
    * @enum {string}
    */
export enum BackendParamBaseLocationEnum {
    PATH = 'PATH',
    QUERY = 'QUERY',
    HEADER = 'HEADER'
}
