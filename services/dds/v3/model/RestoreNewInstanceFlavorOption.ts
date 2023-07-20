

export class RestoreNewInstanceFlavorOption {
    public type?: RestoreNewInstanceFlavorOptionTypeEnum | string;
    public num?: string;
    public size?: string;
    private 'spec_code'?: string;
    public constructor(type?: string, num?: string, specCode?: string) { 
        this['type'] = type;
        this['num'] = num;
        this['spec_code'] = specCode;
    }
    public withType(type: RestoreNewInstanceFlavorOptionTypeEnum | string): RestoreNewInstanceFlavorOption {
        this['type'] = type;
        return this;
    }
    public withNum(num: string): RestoreNewInstanceFlavorOption {
        this['num'] = num;
        return this;
    }
    public withSize(size: string): RestoreNewInstanceFlavorOption {
        this['size'] = size;
        return this;
    }
    public withSpecCode(specCode: string): RestoreNewInstanceFlavorOption {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RestoreNewInstanceFlavorOptionTypeEnum {
    MONGOS = 'mongos',
    SHARD = 'shard',
    CONFIG = 'config',
    REPLICA = 'replica',
    SINGLE = 'single'
}
