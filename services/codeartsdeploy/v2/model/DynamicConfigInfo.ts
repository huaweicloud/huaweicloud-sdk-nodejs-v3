import { KeyValueDO } from './KeyValueDO';


export class DynamicConfigInfo {
    public key?: string;
    public value?: string;
    public type?: DynamicConfigInfoTypeEnum | string;
    public constructor() { 
    }
    public withKey(key: string): DynamicConfigInfo {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): DynamicConfigInfo {
        this['value'] = value;
        return this;
    }
    public withType(type: DynamicConfigInfoTypeEnum | string): DynamicConfigInfo {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DynamicConfigInfoTypeEnum {
    TEXT = 'text',
    HOST_GROUP = 'host_group',
    ENCRYPT = 'encrypt',
    ENUM = 'enum'
}
