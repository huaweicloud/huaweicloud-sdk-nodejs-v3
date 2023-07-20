

export class CreateInstanceFlavorOption {
    public num?: string;
    public storage?: string;
    public size?: string;
    private 'spec_code'?: string;
    public constructor(num?: string, storage?: string, size?: string, specCode?: string) { 
        this['num'] = num;
        this['storage'] = storage;
        this['size'] = size;
        this['spec_code'] = specCode;
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