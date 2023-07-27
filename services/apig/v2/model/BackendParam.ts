import { BackendParamBase } from './BackendParamBase';


export class BackendParam {
    public origin?: BackendParamOriginEnum | string;
    public name?: string;
    public remark?: string;
    public location?: BackendParamLocationEnum | string;
    public value?: string;
    public id?: string;
    private 'req_param_id'?: string;
    public constructor(origin?: string, name?: string, location?: string, value?: string) { 
        this['origin'] = origin;
        this['name'] = name;
        this['location'] = location;
        this['value'] = value;
    }
    public withOrigin(origin: BackendParamOriginEnum | string): BackendParam {
        this['origin'] = origin;
        return this;
    }
    public withName(name: string): BackendParam {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): BackendParam {
        this['remark'] = remark;
        return this;
    }
    public withLocation(location: BackendParamLocationEnum | string): BackendParam {
        this['location'] = location;
        return this;
    }
    public withValue(value: string): BackendParam {
        this['value'] = value;
        return this;
    }
    public withId(id: string): BackendParam {
        this['id'] = id;
        return this;
    }
    public withReqParamId(reqParamId: string): BackendParam {
        this['req_param_id'] = reqParamId;
        return this;
    }
    public set reqParamId(reqParamId: string  | undefined) {
        this['req_param_id'] = reqParamId;
    }
    public get reqParamId(): string | undefined {
        return this['req_param_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackendParamOriginEnum {
    REQUEST = 'REQUEST',
    CONSTANT = 'CONSTANT',
    SYSTEM = 'SYSTEM'
}
/**
    * @export
    * @enum {string}
    */
export enum BackendParamLocationEnum {
    PATH = 'PATH',
    QUERY = 'QUERY',
    HEADER = 'HEADER'
}
