

export class CreateInstanceFlavorOption {
    public type?: CreateInstanceFlavorOptionTypeEnum | string;
    public num?: string;
    public storage?: string;
    public size?: string;
    private 'spec_code'?: string;
    public constructor(type?: string, num?: string, specCode?: string) { 
        this['type'] = type;
        this['num'] = num;
        this['spec_code'] = specCode;
    }
    public withType(type: CreateInstanceFlavorOptionTypeEnum | string): CreateInstanceFlavorOption {
        this['type'] = type;
        return this;
    }
    public withNum(num: string): CreateInstanceFlavorOption {
        this['num'] = num;
        return this;
    }
    public withStorage(storage: string): CreateInstanceFlavorOption {
        this['storage'] = storage;
        return this;
    }
    public withSize(size: string): CreateInstanceFlavorOption {
        this['size'] = size;
        return this;
    }
    public withSpecCode(specCode: string): CreateInstanceFlavorOption {
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
export enum CreateInstanceFlavorOptionTypeEnum {
    MONGOS = 'mongos',
    SHARD = 'shard',
    CONFIG = 'config',
    REPLICA = 'replica',
    SINGLE = 'single'
}
